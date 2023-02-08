export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'bannerText',
      title: 'banner text',
      type: 'string',
    },
    {
      name: 'bannerSubText',
      title: 'Banner Sub Text',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'video',
      title: 'Video',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'image', name: 'imagebg'},
            {type: 'file', name: 'clip'},
          ],
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'socials',
      title: 'social links',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
  ],
}
