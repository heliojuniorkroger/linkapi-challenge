# linkapi-challenge

> An API to sync data between Pipedrive and Bling.

## How to sync data

To sync the data between the two API's I've created the file `services/SyncService.ts`.
Inside this file, there's a method called `sync`. When this method's called, all the deals with the `won` status in Pipedrive will be sent to Bling. After this, an insertion of the results in MongoDB's database will occur.

## Getting stored orders

To get the stored information of the orders, you can request the `/orders` API path.
Example:

```bash
curl -XGET http://localhost:3000/orders
```

## Installing TypeScript

You may need TypeScript compiler to build/run this application. You can install TypeScript globally using:

```bash
npm install -g typescript
```

## Installing application dependencies

Run the command below in the API root folder to install all the dependencies:

```bash
npm install
```

## Starting server

Run the command below to start a server using port **3000**.

```bash
npm start
```

## Build

```bash
npm run build
```

After running this, an **dist** folder will be created, with all the application files builded.
