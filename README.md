# Welcome to dUni.

[Demo Video](https://)

Our Application is hosted on these links below :

-   [Vercel](https://)
-   [Valist](https://)

Authors

-   [Suhel-Kap](https://github.com/Suhel-Kap)
-   [Ahmed-Aghadi](https://github.com/Ahmed-Aghadi)
-   [Ibrahim-Ghasia](https://github.com/IbrahimGhasia)

## Decription

---

dUni (Decentralized University) offers a fully decentralized platform to create universities, create courses, conduct live classes and give License NFT Degrees. It is an innovative decentralized platform that allows you to create universities with all their features without any intermediary. You can then create courses and conduct live classes, all in a user-friendly environment.

<br />

dUni connects students, teachers and entrepreneurs from all over the world and offers a truly global perspective on learning. With dUni's blockchain technology, we're able to offer degrees that are open and accessible to everyone on our platform.

### Smart Contract [Link](https://mumbai.polygonscan.com/address/0x6b1d273B8b3CE255a67f53ef86B721E2C4FB3D29) 

---

### Here is the prototype architecture of the dUni.

![image](/public/ETHIndiaChart.png)

# Technologies Used

## Lens Protocol

-   All the users are created using Lens Protocol.

    -   The code snippets that are using Lens Protocol are located here 
    -  [Lens Protocol](https://github.com/Suhel-Kap/dUni/blob/41be2b79a9e956b5751f787b275d2679ffc47aa7/hooks/useLens.ts#L18)

## Graph

-   We are using the hosted subgraph of valist to fetch the data.
    -   The code snippets that are using Graph are located here 
    -   [Graph](https://github.com/Suhel-Kap/dUni/blob/41be2b79a9e956b5751f787b275d2679ffc47aa7/hooks/useLens.ts#L18)
    -   [Graph](https://github.com/Suhel-Kap/dUni/blob/41be2b79a9e956b5751f787b275d2679ffc47aa7/constants/graphql/queries.js#L2)

## Valist

-   This decentralized application is deployed on Valist.
-   Valist Project is used for course creatation for a university to integrate Software License NFT's, so that student can purchase License NFT to enrol in the course.

    -   The code snippets that are using Valist are located here
    -   [Valist](https://mumbai.polygonscan.com/address/0x6b1d273B8b3CE255a67f53ef86B721E2C4FB3D29#readContract)

## IPFS

-   IPFS is used as the data storage provider to store all the relavent data like images, json objects etc.

    -   The code snippets that are using IPFS are located here
    -   [IPFS](https://github.com/Suhel-Kap/dUni/blob/41be2b79a9e956b5751f787b275d2679ffc47aa7/hooks/useNftStorage.ts#L3)

## Livepeer

-   Livepeer is used to conduct live classes for the courses. The class will be conducted by the professor.
    -   The code snippets that are using Livepeer are located here
    -   [Livepeer](https://github.com/Suhel-Kap/dUni/blob/41be2b79a9e956b5751f787b275d2679ffc47aa7/components/LiveClassesPannel/LiveClassesPannel.tsx#L23)

## Worldcoin

-   Worldcoin is used to verify the personhood of the user.

    -   The code snippets that are using Worldcoin are located here 
    -   Will be implement it soon . . . 

## PolygonId

-   PolygonId is used to verify the degree recieved by the students from there university on Chain.

    -   The code snippets that are using PolygonId are located here . . .
    -   Will be implement it soon . . . 

## Revise

-   Courses assignment will be graded by the professor and acording to thier marks, the metadata of the student's NFT will be updated dynamically using Revise Network.

    -   The code snippets that are using Revise are located here . . .
    -   [Revise](https://github.com/Suhel-Kap/dUni/blob/68d910add1eadf33ef58dc66d3ed0133ec6dbc9b/components/SubmissionPannel/SubmissionPannel.tsx#L125)
    -   [Revise](https://github.com/Suhel-Kap/dUni/blob/68d910add1eadf33ef58dc66d3ed0133ec6dbc9b/components/CoursesCard/CoursesCard.tsx#L79)

## Push

-   Push is used to integrate university support chat and notifications.

    -   The code snippets that are using Push Protocol are located here . . .
    -   [Push](https://github.com/Suhel-Kap/dUni/blob/68d910add1eadf33ef58dc66d3ed0133ec6dbc9b/pages/university.tsx#L72)
