import {post, postCategory} from './postType'
import {product, productFeature} from './productType'
import {feature, featureCategory} from './featureType'
import {page, pageSection, pageContent, pageFaq, pageCard} from './pageType'
import {faq} from './faqType'
import {card} from './cardType'
import {navigation, link} from './navigationType'
import {person} from './personType'
import {logo} from './logoType'
import {movie} from './movieType'
import {slide} from './slideType'
import {technology, technologyCategory} from './technologyType'
import {testimonial} from './testimonialType'
import {course, courseSection, courseCategory, courseChapter, courseEpisode} from './courseType'

export const schemaTypes = [
  navigation,
  link,
  faq,
  post,
  postCategory,
  course,
  courseSection,
  courseCategory,
  courseChapter,
  courseEpisode,
  person,
  card,
  product,
  logo,
  movie,
  slide,
  page,
  pageSection,
  pageContent,
  pageFaq,
  pageCard,
  productFeature,
  feature,
  featureCategory,
  technology,
  technologyCategory,
  testimonial
]
