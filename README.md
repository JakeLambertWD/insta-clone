# Next.js + Tailwind CSS Project setup

npx create-next-app -e with-tailwindcss my-project

# React/Tailwind heroicons

npm install @heroicons/react

# Next/image src='link'

when using this component i.e. <Image src='https://links.papareact.com/jjm' />

this will throw an error about the src link.

you must create a next.config.js file like so:

module.exports = {
images: {
domains: ['links.papareact.com']
}
};

# Customise a form field in Tailwind (reseting the default styles)

for this you need to bring in a Tailwind extension to override these UI elements

https://github.com/tailwindlabs/tailwindcss-forms

npm install @tailwindcss/forms

add as a plugin in tailwind.config.js

# Create your own Custom Tailwind Utility Classes

create an external CSS file named globals.css

set this inside to bring in all the Tailwind utility classes
@tailwind base;
@tailwind components;
@tailwind utilities;

go to_app.js and change the CSS file link
from: import 'tailwindcss/tailwind.css'
to: import '../styles/globals.css';

# faker.js

generate masses amount of fake data

npm i faker

# Tailwind scrollbar

npm install --save-dev tailwind-scrollbar

add as a plugin in tailwind.config.js

require('tailwind-scrollbar')

# Tailwind scroll-bar-hide

npm install tailwind-scrollbar-hide

add as a plugin in tailwind.config.js

require('tailwind-scrollbar-hide')

# Nextauth.js

https://next-auth.js.org/

npm install next-auth@beta

# firebase

npm i firebase

Setup a firebase web app on Firebase

# recoil

npm install recoil

# headless ui Tailwind

npm install @headlessui/react
