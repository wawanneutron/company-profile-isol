import airtable from '@/api/airtable'

export default (ctx, inject) => {
  let api = {}
  api.airtable = airtable(ctx)

  inject('api', api)
}
