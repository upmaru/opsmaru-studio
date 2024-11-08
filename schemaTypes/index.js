import {post} from './postType'
import {product, productFeature} from './productType'
import {feature, featureCategory} from './featureType'
import {page, pageSection, pageSectionContent, pageFaq} from './pageType'
import {faq} from './faqType'

export const schemaTypes = [
  faq,
  post,
  product,
  page,
  pageSection,
  pageSectionContent,
  pageFaq,
  productFeature,
  feature,
  featureCategory,
]
