export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6062f461ea03c301b09219e8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nusdfrd8',
                  apiId: '3f950265-c1ad-4784-92d5-57c62d8bc7cc'
                },
                {
                  buildHookId: '6062f462e31d36f91d18f9de',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-w2p5wv6b',
                  apiId: '9dfdf0db-d9a9-438d-9071-67aa684c208a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sanderdebr/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-w2p5wv6b.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
