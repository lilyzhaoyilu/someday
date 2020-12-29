import * as APIUTIL from '../util/tag_util';

export const  RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';

const fetchAllTags = () => ({
  type: RECEIVE_ALL_TAGS,
  tags
})

export const indexOfTags = (
  APIUTIL.indexOfTags()
    .then(
      tags => dispatch(fetchAllTags(tags))
    )
  )
