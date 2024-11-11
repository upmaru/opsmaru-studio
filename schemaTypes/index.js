import {post} from './postType'
import {product, productFeature} from './productType'
import {feature, featureCategory} from './featureType'
import {page, pageSection, pageContent, pageFaq, pageCard} from './pageType'
import {faq} from './faqType'
import {card} from './cardType'
import {navigation, link} from './navigationType'
import {person} from './personType'

export const schemaTypes = [
  navigation,
  link,
  faq,
  post,
  person,
  card,
  product,
  page,
  pageSection,
  pageContent,
  pageFaq,
  pageCard,
  productFeature,
  feature,
  featureCategory,
]
