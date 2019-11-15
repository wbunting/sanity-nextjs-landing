export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5dce719137d038c8cd09ecdb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-studio',
                  apiId: 'd27caf74-4892-44df-9c35-33199cb9a126'
                },
                {
                  buildHookId: '5dce719137d038a07409ece6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing',
                  apiId: '127fb043-6479-4ce7-8f1b-7cdfe811ac90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wbunting/sanity-nextjs-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
