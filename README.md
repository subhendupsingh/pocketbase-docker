# Pocketbase Docker for Render.com

_Make sure you have an account on [Render.com](https://render.com/register)_

1. Create new Web Service
2. Fork this repo [https://github.com/devbyray/pocketbase-docker](https://github.com/devbyray/pocketbase-docker) and make it private!
3. And select the repo for the service
4. After the build go to your {URL}/_ to see the dashboard where you can create an account

## Want to get your migrations and data from Pockethost?

![image](https://github.com/devbyray/pocketbase-docker/assets/6241164/480f9baf-791a-4bc2-af23-0d00bbcf52a7)
1. Connect your FTP client ([docs](https://pockethost.io/docs/usage/ftp/))
2. Download the `pb_migrations` and/or `pb_data` to your local repo ![image](https://github.com/devbyray/pocketbase-docker/assets/6241164/3d721c69-2b58-472c-a9fc-88e939e54c98)
3. Uncomment this line in the Dockerfile: `# COPY ./pb_migrations /pb/pb_migrations`
4. Uncomment this line in the Dockerfile: `# COPY ./pb_data /pb/pb_data`
5. Commit and push the changes to your repo
6. Render.com will pick up the changes and use your migrations in Docker 💪


