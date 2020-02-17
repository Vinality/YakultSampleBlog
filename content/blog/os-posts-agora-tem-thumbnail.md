---
path: /thumbnail
date: 2020-02-13T18:27:47.599Z
title: Os posts agora tem thumbnail!
description: >-
  Esta descrição vai ser enorme de propósito para testar o overflow do texto
  dentro do container e por isso eu bla bla bla descrição grande demais uau
thumbnail: assets/graph.png
tags: ['misc']
---
Basta adicionar ao frontmatter da query do blog a propriedade thumbnail e inserir o caminho em cada post para a respectiva thumbnail.

Minha query atual está da seguinte forma: 

``export const pageQuery = graphql` ``

`  query {`

`    site {`

`      siteMetadata {`

`        title`

`      }`

`    }`

`  allMdx(sort: { fields: [frontmatter___date], order: DESC }) {`

`    edges {`

`      node {`

`        excerpt`

`        fields {`

`          slug`

`        }`

`        frontmatter {`

`          date(formatString: "MMMM DD, YYYY")`

`          title`

`          description`

`          tags`

`          thumbnail {`

`            childImageSharp {`

`              fixed(width: 200, height: 200) {`

`                ...GatsbyImageSharpFixed`

`              }`

`            }`

`          }`

`        }`

`      }`

`    }`

`  }`

``}` ``
