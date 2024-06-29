### elcome to **BeatBuzz**

Team info:

-   Dhrumit Panchal(Team Leader)
-   Riya Panchal
-   Sparsh Lohana
-   Varshil J. Patel

<br />
<hr />
<br />

> If you have turbo install in your system then run command dirctly without `npx` otherwise use `npx` to execute turbo commands.

First step is to install necessary dependencies.
For installing dependencies run below command.

```
npm install --save
```

Add necessary enviroment variables in each workspace.

```
|-- apps/
    |-- server/.env
    |-- www/.env
```

For getting instant output of code in production environment run below command.

```
npx turbo start
```

For getting build of all workspaces run below command

> Note: Although `npx turbo run start` command do this job directly.

```
npx turbo run build
```

<br />
<hr />
<br />

> Note: This section of instructions is only for developer.
> Run below command for running all workspaces on development environment at `./` root.

```
npx turbo dev
```
