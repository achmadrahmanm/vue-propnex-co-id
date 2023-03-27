<!-- <script setup></script>

<template>
 <div class="p-5 mb-4 bg-light rounded-3" style="height: 100vh;">
   <div class="container-fluid py-5">
     <h1 class="display-5 fw-bold">Welcome to POSTS</h1>
     <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum incidunt fuga nisi ea suscipit labore, architecto, laborum quibusdam doloribus aspernatur mollitia praesentium quo corporis, voluptatibus et aperiam rem? Facere, laudantium?</p>
   </div>
 </div>
</template> -->

<script setup>

    //import ref and onMounted
    import { ref, onMounted } from 'vue';

    //import api
    import api from '../../api';

    //define state
    const posts = ref([]);

    //method fetchDataPosts
    const fetchDataPosts = async () => {

        //fetch data 
        await api.get('/api/posts')

        .then(response => {

            //set response data to state "posts"
            posts.value = response.data.data.data

        });
    }

    //run hook "onMounted"
    onMounted(() => {

        //call method "fetchDataPosts"
        fetchDataPosts();
    });


    //method deletePost
    // const deletePost = async (id) => {

    //     //delete post with API
    //     await api.delete(`/api/posts/${id}`)
    //     .then(() => {

    //         //call method "fetchDataPosts"
    //         fetchDataPosts();
    //     })
    // };

    const deletePost = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //delete post with API
                api.delete(`/api/posts/${id}`)
                .then(() => {

                    //call method "fetchDataPosts"
                    fetchDataPosts();
                })

                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
        })
    };

</script>

<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'posts.create' }" class="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW POST</router-link>
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Content</th>
                                    <th scope="col" style="width:15%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="posts.length == 0">
                                    <td colspan="4" class="text-center">
                                        <div class="alert alert-danger mb-0">
                                            Data Belum Tersedia!
                                        </div>
                                    </td>
                                </tr>
                                <tr v-else v-for="(post, index) in posts" :key="index">
                                    <td class="text-center">
                                        <img :src="'http://localhost:8000' + post.image" width="200" class="rounded-3"/>
                                    </td>
                                    <td>{{ post.title }}</td>
                                    <td>{{ post.content }}</td>
                                    <td class="text-center">
                                        <router-link :to="{ name: 'posts.edit', params:{id: post.id} }" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</router-link>
                                        <!-- <button class="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button> -->
                                        <button @click.prevent="deletePost(post.id)" class="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>