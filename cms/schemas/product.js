export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: {type: 'category'},
    //     },
    //   ],
    // }
  ],
}
