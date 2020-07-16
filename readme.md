# urql whitespace issue test bench

This repo demonstrates an issue where when using `urql` to make queries using GET, the query body does not have whitespace removed which results in excessive query length. 

## Running

```bash
npm install
node index.js
```

## Sample Results

### Query

```graphql
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
```

### Request URL

```
/graphql?operationName=Collection&query=query%20Collection(%24collectionId%3A%20String)%20%7B%0A%20%20products(filter%3A%20%7Bcategory_id%3A%20%7Beq%3A%20%24collectionId%7D%7D%2C%20sort%3A%20%7Bposition%3A%20ASC%7D%2C%20pageSize%3A%2020)%20%7B%0A%20%20%20%20items%20%7B%0A%20%20%20%20%20%20selectedOfferPrice%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20brand%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20sku%0A%20%20%20%20%20%20categories%20%7B%0A%20%20%20%20%20%20%20%20level%0A%20%20%20%20%20%20%20%20url_path%0A%20%20%20%20%20%20%20%20category_collection%0A%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20small_image%20%7B%0A%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20canonical_url%0A%20%20%20%20%20%20type_id%0A%20%20%20%20%20%20...%20on%20ConfigurableProduct%20%7B%0A%20%20%20%20%20%20%20%20configurable_options%20%7B%0A%20%20%20%20%20%20%20%20%20%20attribute_id%0A%20%20%20%20%20%20%20%20%20%20attribute_code%0A%20%20%20%20%20%20%20%20%20%20values%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value_index%0A%20%20%20%20%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20%20%20%20%20value_index%0A%20%20%20%20%20%20%20%20%20%20%20%20swatch_data%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20thumbnail%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20variants%20%7B%0A%20%20%20%20%20%20%20%20%20%20product%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20sku%0A%20%20%20%20%20%20%20%20%20%20%20%20selectedOfferPrice%0A%20%20%20%20%20%20%20%20%20%20%20%20colorfamily%0A%20%20%20%20%20%20%20%20%20%20%20%20canonical_url%0A%20%20%20%20%20%20%20%20%20%20%20%20media_gallery%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20attributes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20%20%20%20%20value_index%0A%20%20%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20__typename%0A%20%20%20%20%7D%0A%20%20%20%20__typename%0A%20%20%7D%0A%20%20brand%3A%20customAttributeMetadata(attributes%3A%20%7Battribute_code%3A%20%22brand%22%2C%20entity_type%3A%20%224%22%7D)%20%7B%0A%20%20%20%20items%20%7B%0A%20%20%20%20%20%20attribute_options%20%7B%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20__typename%0A%20%20%20%20%7D%0A%20%20%20%20__typename%0A%20%20%7D%0A%7D%0A&variables=%7B%7D
```