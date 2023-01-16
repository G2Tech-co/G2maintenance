# G2maintenance

Deploy maintenance page as fast as possible!, Powerd by [`Svelte`](https://kit.svelte.dev/).
Image [`DockerHub`](https://hub.docker.com/r/arsalanses/g2maintenance-page).

## Screenshot
![screenshot](/Screenshot.png?raw=true)

## docker-compose.yml
```
version: '3'

services:
  app:
    image: arsalanses/g2maintenance-page
    environment:
      - PUBLIC_TITLE=We will be back soon!
      - PUBLIC_MESSAGE=Sorry for the inconvenience. We are performing some maintenance at the moment. - The G2Tech Team
      - PUBLIC_SENDPORTAL="https://sendportal.test"
      - PUBLIC_SENDPORTAL_TAG=1
```
