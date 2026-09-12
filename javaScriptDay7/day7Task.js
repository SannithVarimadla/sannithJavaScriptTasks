//=============================== Day 7 TASKS ==============================

/*===========================TASK -1 ==========================================

   let a=fetch("https://fakestoreapi.com/products");        //fetch the api using fetch() method
   
   
      var jsonForm =  a.then((data)=>{
                
                return(data.json());            //convert to json,store in any variable
        });

        // Product title
           
        jsonForm.then((products)=>{
               products.forEach((currentElement,indexNum , totalArray)=>{
                            console.log(currentElement.title);                  //from json format get the array(Products) use foreach to iterate that products array and get titles
               });
        });

    // Price

        jsonForm.then((products)=>{

            //console.log(products[0].price);
            products.forEach((currentElement , indexNum)=>{
                console.log(currentElement.price);
            })
        });
// Category

        jsonForm.then((products)=>{
                products.forEach((currentElement)=>{
                        console.log(currentElement.category);
                })
        })


    jsonForm.then((products)=>{

           console.log("\n ------Titles : ------- \n");
           var newArrayOfTitles=  products.map((currentElement, indexNum)=>{
                return currentElement.title;
            });

            console.log(newArrayOfTitles);
        });


        jsonForm.then((products)=>{
           console.log("\n ------Products Prices : ------- \n");
           var newArrayOfPrices =  products.map((currentElement,indexNum)=>{
                return currentElement.price;
            });
            console.log(newArrayOfPrices);
        })



// Use filter() to find products with price greater than $100.

            jsonForm.then((products)=>{
                console.log("\n ------Products Prices greate than $100 : ------- \n");

              var priceAbove100=  products.filter((currentElement)=>{
                    return currentElement.price > 100;
                });
                console.log(priceAbove100);
            });

// Use find() to find the first product in the "electronics" category.

            jsonForm.then((Products)=>{
                console.log("\n ------ first product in the electronics category: ------- \n");
              var firstELect=  Products.find((currentElement)=>{
                    
                    return currentElement.category == "electronics";
                   
                });
                console.log(firstELect);
            });

// Use reduce() to calculate the total price.

            jsonForm.then((products)=>{
                console.log("\n ------Total Price of all products : ------- \n");
               var totalPrices= products.reduce((accumulator, currentElement)=>{
                    return accumulator+currentElement.price;
                },0);
                console.log(totalPrices);
            });

// Use sort() to arrange products from highest price to lowest.

            jsonForm.then((products)=>{
                console.log("\n ------Products from highest price to lowest prices : ------- \n");
               var HtoLow= products.sort((a,b)=>{
                    return b.price-a.price;

                });
                console.log(HtoLow);
            });

// Handle API errors using .catch().
            a.catch((error)=>{
                console.warn(error);
            });

// Display a completion message using .finally().

            a.finally(()=>{
                console.log("successful");
            });


//=====================================================================*/
/*========================Task 2 — Product Category Dashboard=============================================



            let b= fetch("https://fakestoreapi.com/products");

// Create a console-based dashboard.
// Expected output:
    console.log(" ===== PRODUCT DASHBOARD =====");

    var jsonFor = b.then((data)=>{
        return data.json();
    })                                          //convert APi to json format
    console.log(jsonFor);

// Total Products: 20

    jsonFor.then((products)=>{
        console.log("Total Products:", products.length);
    });

// Electronics: 6

    jsonFor.then((products)=>{
       var electronics = products.filter((currentElement,indexNum)=>{
            return currentElement.category=="electronics";
        });
        console.log("Electronics:",electronics.length);
    })

// Jewelery: 4

     jsonFor.then((products)=>{
       var jewelery = products.filter((currentElement,indexNum)=>{
            return currentElement.category=="jewelery";
        });
        console.log("Jewelery:",jewelery.length);
    });

// Men's Clothing: 4

    jsonFor.then((products)=>{
      var Mclothing=  products.filter((currentElement , indexNum)=>{
            return currentElement.category == "men's clothing";
        });
        console.log("Men's Clothing:",Mclothing.length);
    });

// Women's Clothing: 6
jsonFor.then((products)=>{
      var Wclothing=  products.filter((currentElement , indexNum)=>{
            return currentElement.category == "women's clothing";
        });
        console.log("Women's Clothing:",Wclothing.length);
    });

// Highest Price: $999.99

    jsonFor.then((products)=>{
        var highestPrice=0;
        products.forEach((currentElement,indexNum)=>{
                if(currentElement.price> highestPrice)
                {
                        highestPrice = currentElement.price;
                }
        });
        console.log("Highest Price: $",highestPrice);
    });

// Lowest Price: $7.95

    jsonFor.then((products)=>{
        var lowestPrice=100000;
        products.forEach((currentElement,indexNum)=>{

                if(currentElement.price < lowestPrice)
                {
                        lowestPrice = currentElement.price;
                }
        });
       
        console.log("Lowest Price:$",lowestPrice);
    });

// Average Price: $XXX

        jsonFor.then((products)=>{
           var totalPrices= products.reduce((accumulator , currentElement , indexNum , totalArray)=>{
                return accumulator + currentElement.price;
            },0);
                console.log("Average Price:$",totalPrices/products.length);
        });

//=====================================================================*/
//====================Task 3 — User & Post API=================================================


      var usersApi= fetch("  https://jsonplaceholder.typicode.com/users");
       var postsApi= fetch(" https://jsonplaceholder.typicode.com/posts ");

        var jsonUsers = usersApi.then((data)=>{
            return data.json();
        });


        var jsonPosts = postsApi.then((data)=>{
            return data.json();
        });

        console.log(jsonPosts);

// Fetch users.
// Display all user names.
                    console.log("------All User Names : ---------");
        jsonUsers.then((users)=>{
                        users.forEach((currentElement , indexNum)=>{
                            console.log(currentElement.username);
                        });
                    });
        
// Display user name + email.
               
            jsonUsers.then((users)=>{
                    console.log("\n ------user Names with Emails : ------- \n");
                users.forEach((currentElement, innerNum)=>{
                    console.log(currentElement.name ,"---email:", currentElement.email);
                });
            });

// Find the user with ID 5.

                jsonUsers.then((users)=>{
                      console.log("\n ------user with ID 5 : ------- \n");
                    users.forEach((currentElement , indexNum)=>{
                            if(currentElement.id == 5)
                            {
                                console.log(users[indexNum]);
                            }
                     });
                   
                 })

// Filter users from a particular city.

                 jsonUsers.then((users)=>{
                     console.log("\n ------users in Roscoeview city: ------- \n");
                    var usersINRoscoeview =  users.filter((currentElement)=>{
                        return currentElement.address.city == 'Roscoeview';
                    });
                    console.log(usersINRoscoeview);
                 })

                 
// Fetch posts.
// Display posts written by user ID 1.
                 jsonPosts.then((posts)=>{
                   console.log("\n ------Posts made by User id 1: ------- \n");
                  let postsByUser1=  posts.filter((currentElement,indexNum)=>{
                        return currentElement.userId==1;
                    });
                    console.log(postsByUser1);
                 });
              
// Count how many posts user ID 1 has created.

                    jsonPosts.then((posts)=>{
                      console.log("\n ------Total Posts made by User id 1: ------- \n");
                      let totalPostsByUser1= posts.filter((currentElement , indexNum)=>{
                                return currentElement.userId==1;
                       });
                       console.log(totalPostsByUser1.length);
                    });

// Find the first post with more than 50 characters in the title.
                        jsonPosts.then((posts)=>{
                           console.log("\n ------First post having more than 50 characters : ------- \n");
                           let postSizeM50= posts.find((currentElement , indexNum)=>{
                                return currentElement.title.length > 50;
                            });
                            console.log(postSizeM50);
                        });

                       
//=====================================================================*/
/*=======================Task 4 — API + Search==============================================

    let e = fetch("https://fakestoreapi.com/products");


    let jsonE = e.then((data)=>{
        return data.json();
    });

       jsonE.then((products)=>{
            var categ = prompt("Enter product Category :");
            var pric = Number(prompt("Enter maximum price :"));
             let categoryResult = products.filter((currentElement , indexNum)=>{
                return currentElement.category == categ && currentElement.price <=pric;
             });
             console.log(categoryResult);
        });

//=====================================================================*/

/*=======================Task 5 — API Shopping Cart==============================================


        var f = fetch("https://fakestoreapi.com/products");

        var jsonF = f.then((data)=>{
            return data.json();             //fetch api and convert to json
        });
        console.log(jsonF);

// Display available products.
       jsonF.then((products)=>{
             products.forEach((currentElement , indexNum)=>{
                console.log(currentElement.title);                          //use then() and get the products array data and for that array use forEach loop and iterate product names
            });
        });
// Select products using their IDs.

            jsonF.then((products)=>{
                var productId=prompt("Enter product Id :");
               let productDynamic= products.filter((currentElement , indexNum)=>{       //use filter ,it creates a new array in that it contain products with ids
                    return currentElement.id ==productId;
                });
                console.log(productDynamic);
            });
// Add selected products to an array. and calculate cart price

            var selsctedProductsArray = [];                                     //user enters items ids ,i asked 4 items ,i added them to a new array.

             jsonF.then((products)=>{
                for(let i=0;i<=3 ; i++)
                {                                                               //this for loop asks user 4 times to add the products
                            var productId=prompt("Enter product Id :");
                        let productDy= products.find((currentElement , indexNum)=>{
                                return currentElement.id ==productId;               //get the products using id entered by user
                            });
                            selsctedProductsArray.push(productDy);                  //add that product at the end of array
                }


                 var totalPrice=  selsctedProductsArray.reduce((accumulator , currentElement)=>{
                    return accumulator+currentElement.price;
                    },0);

                     console.log("=============cart====================");
                    for(let i=0;i<=selsctedProductsArray.length-1;i++)                      //iterate the cart array and get prices of products
                    {
                        console.log("Product ",i+1," :",selsctedProductsArray[i].title);        //product i+1 beause ,for serial numbers product 1 , product 2 (i starts from 0,if not +1 =product 0 :ffff)
                        console.log("price : $",selsctedProductsArray[i].price);
                    }

                if(totalPrice > 100 && totalPrice <=200)
                {
                     console.log("Total :",totalPrice);
                     let dis=totalPrice*10/100;
                     console.log("discount : 10%")
                     console.log("Final Amount :",totalPrice-dis);
                }
                else if(totalPrice > 200)
                    {
                     console.log("Total :",totalPrice);
                     let disc=totalPrice*20/100;
                     console.log("discount : 20%")
                     console.log("Final Amount :",totalPrice-disc);
                    }

            });

//=====================================================================*/

/*=========================Task 6 — FakeStore Product Report ============================================

//1. Fetch API
var G= fetch("https://fakestoreapi.com/products");


console.log("========== PRODUCT REPORT ==========");


//2. Convert response
        var jsonG = G.then((data)=>{
            return data.json();
        });

       console.log(jsonG);

// 3. Display all products

        jsonG.then((products)=>{
             console.log("Total Products : ",products.length);
             console.log("Products Names : ");
            products.forEach((currentElement , indexNum)=>{
                console.log(currentElement.title);
            });
            
        });

// 4. Create product names array

        jsonG.then((products)=>{
           let productsNewArray= products.map((currentElement , indexNum)=>{
                return currentElement.title;
            });
            console.log(productsNewArray);
        });

// 5. Filter expensive products
        jsonG.then((products)=>{
           let priceG100= products.filter((currentElement , indexNum)=>{
                return currentElement.price > 100;
            });
                console.log("-----------Products Above $100----------------");
                console.log(priceG100);
        })

// 6. Find electronics product

        jsonG.then((products)=>{
           let electronicsProducts= products.find((currentElement , indexNum)=>{
                return currentElement.category == "electronics";
            });
            console.log("------electronics products : ----");
            console.log(electronicsProducts);
        });

// 7. Calculate total price

        jsonG.then((products)=>{
            let totalPrice = products.reduce((accumulator , currentElement)=>{
                return accumulator + currentElement.price;
            },0);
            console.log("-------Total Price of All Products ", totalPrice);
        });

// 8. Check products

        jsonG.then((products)=>{
           let productExist= products.some((currentElement , indexNum)=>{
                 return currentElement.price > 500;
            });
                console.log("-------Any Product Above $500:",productExist);
        });

         jsonG.then((products)=>{
           let allPriceMore= products.every((currentElement , indexNum)=>{
                return currentElement.price > 1;
            });
                console.log("-------All Products Above $1:",allPriceMore);
        });

// 9. Sort
// Highest price → lowest price.

        jsonG.then((products)=>{
           let sorting = products.sort((a,b)=>{
                return b.price - a.price;
            });
            console.log("------------Highest → Lowest:");
            console.log(sorting);
        })
// 10. Error handling
        G.catch((error)=>{
            console.log(error);
        })

// .finally()

        G.finally(()=>{
            console.log("Successful");
        })



//===============================================================================================























//=====================================================================*/



