Project Name: iresourcepersonalweb
Framework: ReactJS

## Prerequisites

You need to install all of this before moving to next step.

- [Git](http://git-scm.com/)
- [ReactJS](#)

## Installation

1. Clone repo
2. Move to project: `cd iresourcepersonalweb`
3. Checkout develop: `git checkout develop`
4. Create local environment file using sample file `cp .env.example .env`
5. Install package & run: `yarn & yarn start`

## Configure our VSCode settings for prettier to work on autosave

1. Go to File > Preferences> Settings
2. On your right-hand side, there is an icon to Open Settings in JSON format. Click on that icon.
3. Add below JSON code there

"editor.codeActionsOnSave": { "source.fixAll.eslint": true },
"editor.formatOnSave": true,
"eslint.alwaysShowStatus": true