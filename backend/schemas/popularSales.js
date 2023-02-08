export default {
  name: 'popularSales',
  title: 'Popular Sales',
  type: 'document',
  fields: [
    {
      name: 'popularSales',
      title: 'Popular Sales',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'reference',
      to: [{type: 'product'}],
    },
  ],
}
