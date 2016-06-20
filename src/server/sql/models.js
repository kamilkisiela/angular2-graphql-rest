import knex from './connector';

export class Profiles {
  /**
   * Transforms under_scored string to be camelCased
   */
  _camelCase(str) {
    return str.replace(/_([a-z])/g, (i) => i[1].toUpperCase());
  }

  /**
   * Why this? We have to transform fields from database
   * that are under_scored to be camelCased like in GraphQL schema
   */
  _transform(row) {
    for (const key in row) {
      if (row.hasOwnProperty(key)) {
        const camelCased = this._camelCase(key);

        if (camelCased !== key) {
          row[camelCased] = row[key];
          delete row[key];
        }
      }
    }

    return row;
  }

  all(ids) {
    const query = knex('profiles')
      .select();

    if (ids) {
      return query.whereIn('id', ids)
        .map((row) => this._transform(row));
    }

    return query.map((row) => this._transform(row));
  }

  single(id) {
    return knex('profiles')
      .select()
      .where({
        id
      })
      .first()
      .tap((row) => this._transform(row));
  }

  /**
   * Gets friends data of some profile
   */
  friends(id) {
    return knex('profiles')
      .select(['friends'])
      .where({ id })
      .first()
      .then(({ friends }) => {
        // since we have list of friends
        // we can now fetch each friend
        return knex('profiles')
          .select()
          .whereIn('id', JSON.parse(friends))
          .groupBy('id')
          .map((row) => this._transform(row));
      });
  }
}
