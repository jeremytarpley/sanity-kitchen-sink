export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61dffa6ebb57fb306149d6cb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xqqwmhfz',
                  apiId: '8d66d05e-8d37-417b-bfdb-7802e24fa3ef'
                },
                {
                  buildHookId: '61dffa6e202258138413f8f5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-s5n4dchg',
                  apiId: 'b48f33d6-a3a5-4fb1-8ce1-f7572f71b013'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeremytarpley/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-s5n4dchg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
