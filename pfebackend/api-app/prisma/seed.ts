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

    const name = ["Fruit", "Salads", "Drinks", "Grills and soup", "Morning", "Lunch","dinner"]

    for (var i = 0; i < 7; i++) {
        const category = await prisma.category.create({
            data: {
                name: name[i]
            }
        })
        categoryIds.push(category.id)

    }
    // const subcategoryIds = []

    // const namet = ["Fruit salad","boards","fruit smothie","healthy fruit ice cream","freshness","another salads"]

    // for (var i = 0; i < 6; i++) {
    //     const subcategory = await prisma.subCategory.create({
    //         data: {
    //             name: namet[i],
    //             categoryId: categoryIds[Math.floor(Math.random() * categoryIds.length)]
    //         }
    //     })
    //     subcategoryIds.push(subcategory.id)

    // }
    const FruitSalade = await prisma.subCategory.create({
        data:{
            name:"Fruit salad",
            categoryId:1
        }
    })
    const board = await prisma.subCategory.create({
        data:{
            name:"board",
            categoryId:1
        }
    })
    const Fruitsmothie = await prisma.subCategory.create({
        data:{
            name:"Fruit smothie",
            categoryId:1
        }
    })
    const healthyfruitIceCream = await prisma.subCategory.create({
        data:{
            name:"healthy fruit ice cream",
            categoryId:1
        }
    })
    const freshness = await prisma.subCategory.create({
        data:{
            name:"freshness",
            categoryId:2
        }
    })
    const anotherSalads= await prisma.subCategory.create({
        data:{
            name:"another salads",
            categoryId:2
        }
    })


    

    const productIds = []
    for (var i = 0; i < dataProducts.length - 1; i++) {
        const products = await prisma.products.create({
            data: {
                productName: dataProducts[i].productName,
                description: dataProducts[i].description,
                price: dataProducts[i].price,
                categoryId:  dataProducts[i].categoryId,
                subCategoryId: dataProducts[i].subcategoryId,
                imageURL:dataProducts[i].imageURL
            }
        });
        productIds.push(products.id)
    }

    // const usersIds = []
    // for (let user of datausers) {
    //     const users = await prisma.user.create({
    //         data: {
    //             fullname: user.fullname,
    //             age: user.age,
    //             adresse: user.adresse,
    //             mobilephone: user.mobilephone,
    //             email:user.email,
    //             mdp:user.mdp
    //         }
    //     });
    //     usersIds.push(users.id)

    // }


    // const orderNumberIds = []
    // for (let orderr of dataorders) {
    //     const order = await prisma.order.create({
    //         data: {
    //             orderNumber: orderr.orderNumber,
    //             price: orderr.price,
    //         }
    //     });
    //     orderNumberIds.push(order.id)

    // }


    // for (let revieww of datareview) {
    //     const reviewIds = []
    //     const review = await prisma.review.create({
    //         data: {
    //             content: revieww.content,
    //             productsId: productIds[Math.floor(Math.random() * productIds.length)],
    //             usersId: usersIds[Math.floor(Math.random() * usersIds.length)]
    //         }
    //     });
    //     reviewIds.push(review.id)


    // }
    // const bookmarkIds = []
    // for (let bookmark of databook) {
    //     const bookmark = await prisma.bookmark.create({
    //         data: {
    //             productsId: productIds[Math.floor(Math.random() * productIds.length)],
    //             usersId: usersIds[Math.floor(Math.random() * usersIds.length)]
    //         }


    //     });
    //     bookmarkIds.push(bookmark.id)

    // }
    // const reclamationId = []
    // for (let reclamation of datarec) {
    //     const reclamations = await prisma.reclamation.create({
    //         data: {
    //             title: reclamation.title,
    //             description: reclamation.description,
    //             status: reclamation.status,
    //             usersId: usersIds[Math.floor(Math.random() * usersIds.length)]
    //         }
    //     });
    //     reclamationId.push(reclamations.id)

    // }

    
   








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



