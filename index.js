const { createClient } = require('@urql/core');
require('isomorphic-unfetch');
const startServer = require('./server');

startServer();

const query = `
query Collection($collectionId: String) {
    products(filter: {category_id: {eq: $collectionId}}, sort: {position: ASC}, pageSize: 20) {
      items {
        selectedOfferPrice
        id
        brand
        name
        sku
        categories {
          level
          url_path
          category_collection
          __typename
        }
        small_image {
          url
          label
          __typename
        }
        canonical_url
        type_id
        ... on ConfigurableProduct {
          configurable_options {
            attribute_id
            attribute_code
            values {
              value_index
              label
              value_index
              swatch_data {
                type
                value
                thumbnail
                __typename
              }
              __typename
            }
            __typename
          }
          variants {
            product {
              name
              sku
              selectedOfferPrice
              colorfamily
              canonical_url
              media_gallery {
                url
                __typename
              }
              __typename
            }
            attributes {
              label
              code
              value_index
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    brand: customAttributeMetadata(attributes: {attribute_code: "brand", entity_type: "4"}) {
      items {
        attribute_options {
          value
          label
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

const client = createClient({
  url: 'http://localhost:3000/graphql',
  preferGetMethod: true
});

client.query(query).toPromise().then( result => {
    console.log(result);
});