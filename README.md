# Gai Savoir Front-End

Gai Savoir website front-end, made with Next.js.  
Gai Savoir website : https://www.gai-savoir.fr  
Back-end source code : https://github.com/kyldex/gai-savoir-strapi-api  

## About Gai Savoir

(English below)  

Le Gai Savoir est une plateforme de contenus intellectuels, artistiques et citoyens visant à se libérer de la logique de segmentation propre à la politique et aux industries culturelles et créatives.  

Le Gai Savoir is a platform for intellectual, artistic and civic content designed to break free of the segmentation inherent in politics and the cultural and creative industries.  

→ https://www.gai-savoir.fr/apropos  

## Build and run locally

#### Prerequisites :  
- Node 18+, 20+

#### Dependencies :  
```
npm install
```

#### Configuration :  
Create a `.env.development` file at the root of the project with the `.env.example` example. You can keep the same values for `NEXT_PUBLIC_STRAPI_API_URL` and `NEXT_PUBLIC_WEBSITE_URL`. `CLIENT_PREVIEW_SECRET` and `REVALIDATE_SECRET` are shared with the Strapi back-end. If needed, you can generate random keys using :

```bash
openssl rand -base64 16
```

Start the Next.js development server with :
```bash
npm run dev
```
Go to : http://localhost:3000.

## Production

Build the app :
```
npm run build
```

Launch the app :
```
npm run start
```
