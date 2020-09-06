Requirements:
==============

- Node.js
- Npm
- Git 


Settings development environment:
----------------------------------

- Clone project
- Create file called **.env** based in **.env.example** file
- Execute command: **npm install** to install packages
- Execute command: **cd componentsReact && npm install** to install packages part react components
- Execute command: **cd componentsReact && npm run webpack:watch** to generate bundle.js and watch files in part react
- Execute command: **npm run start:dev** to start server dev.



Settings production environment:
----------------------------------

- Clone project
- Create file called **.env** based in **.env.example** file
- Execute command: **npm install --only=production** to install packages
- Execute command: **cd componentsReact && npm install --only=production** to install packages part react components
- Execute command: **cd componentsReact && npm run production** to generate bundle.js on mode production.
- Execute command: **npm start** to create process using pm2 and start server production.
