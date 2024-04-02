import { PrismaClient } from '@prisma/client';
import { dataProducts, databook } from './data';
import { datausers } from './data';
import { datareview } from './data';
import { dataorders } from './data';
import {datarec} from './data';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {

    const categoryIds = []

    const name = ["Fruit", "Salads", "Drinks", "Grills and soup", "Morning", "Lunch"]

    for (var i = 0; i < 10; i++) {
        const category = await prisma.category.create({
            data: {
                name: name[Math.floor(Math.random() * name.length)]
            }
        })
        categoryIds.push(category.id)

    }

    const productIds = []
    for (var i = 0; i < dataProducts.length - 1; i++) {
        const products = await prisma.products.create({
            data: {
                productName: dataProducts[i].productName,
                description: dataProducts[i].description,
                price: dataProducts[i].price,
                categoryId: categoryIds[Math.floor(Math.random() * categoryIds.length)]
            }
        });
        productIds.push(products.id)
    }

    const usersIds = []
    for (let user of datausers) {
        const users = await prisma.users.create({
            data: {
                fullname: user.fullname,
                age: user.age,
                adresse: user.adresse,
                mobilephone: user.mobilephone,
            }
        });
        usersIds.push(users.id)

    }


    const orderNumberIds = []
    for (let orderr of dataorders) {
        const order = await prisma.order.create({
            data: {
                orderNumber: orderr.orderNumber,
                price: orderr.price,
            }
        });
        orderNumberIds.push(order.id)

    }


    for (let revieww of datareview) {
        const reviewIds = []
        const review = await prisma.review.create({
            data: {
                content: revieww.content,
                productsId: productIds[Math.floor(Math.random() * productIds.length)],
                usersId: usersIds[Math.floor(Math.random() * usersIds.length)]
            }
        });
        reviewIds.push(review.id)


    }
    const bookmarkIds = []
    for (let bookmark of databook) {
        const bookmark = await prisma.bookmark.create({
            data: {
                productsId: productIds[Math.floor(Math.random() * productIds.length)],
                usersId: usersIds[Math.floor(Math.random() * usersIds.length)]
            }


        });
        bookmarkIds.push(bookmark.id)

    }
    const reclamationId = []
    for (let reclamation of datarec) {
        const reclamations = await prisma.reclamation.create({
            data: {
                title: reclamation.title,
                description: reclamation.description,
                status: reclamation.status,
                usersId: usersIds[Math.floor(Math.random() * usersIds.length)]
            }
        });
        reclamationId.push(reclamations.id)

    }

    
   








    console.log('seeded');
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });



