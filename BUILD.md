# Heroku Staging

First, create a release from the develop branch and update staging with the new release:

1. Merge all features into the develop branch.
2. Merge `develop` into `staging`
3. Tag and push staging

Next, update heroku:

1. Switch to `heroku` branch
2. Rebase it on `staging`
3. `npm run build`
4. Remove `dist` from `.gitignore`
5. Commit all changes
6. `git push heroku heroku:master`
