import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';
import CommentSection from './CommentSection';
import axios from 'axios';

import { countTimeDiff } from '../../utils';

const PostDetail = () => {
    const [showCreatePostForm, setShowCreatePostForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [catId, setCatId] = useState([]);
    const [cate, setCate] = useState('');
    const [postDetail, setpostDetail] = useState({});
    const defaultValue = useRef();

    const { id } = useParams();
    const endPoint = `http://localhost:9000/forums/posts/${id}`;
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const validationSchema = Yup.object().shape({
        title: Yup.string().trim()
            .required('Title is required')
            .matches(
                /^[a-zA-Z0-9 ?.$'"-_()@!%*#?&\/\\]+$/,
                'Title cannot contain certain special characters'
            ),
        content: Yup.string().trim()
            .required('Content is required')
            .matches(
                /^[a-zA-Z0-9 ?,.$'"-:+_()@!%*#?&\/\\(\r\n|\r|\n)]+$/,
                'Content cannot contain certain special characters. Be careful with apostrophe. The valid one is " \' "'
            ),
        image: Yup.mixed()
            .test('fileSize', 'The file is too large', (value) => {
                if (!value.length) {
                    return true; // attachment is optional
                }
                return value[0].size <= 2000000;
            })
            .test('fileType', 'Only jpeg/png file is accepted', (value) => {
                if (!value.length) {
                    return true; // attachment is optional
                }
                return (
                    value[0].type === 'image/jpeg' ||
                    value[0].type === 'image/png'
                );
            }),
        cat: Yup.string()
            .test("value", "Category is required", (value) => {
                if (value === "0") {
                    return false
                }
                return true
            })

    });
    const { register, handleSubmit, unregister, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });


    useEffect(() => {
        fetchPostDetail();
        getCat();
    }, []);

    const fetchUserInfo = (passId, oldData, setFunction) => {
        fetch(`http://localhost:9000/profile/profiledetails/${passId}`)
            .then((res) => res.json())
            .then((dataProfile) => {
                setFunction({ ...oldData, username: dataProfile.username });
                defaultValue.current = oldData;
            });
    };

    const getCat = async () => {
        try {
            const res = await axios.get(
                'http://localhost:9000/post_categories/'
            );
            const myCat = res?.data || {};
            setCatId(myCat);
        } catch (err) {}
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:9000/forums/posts/${id}`);
            window.location.replace('/');
        } catch (err) {}
    };


//     const handleEdit = () => {
//         if (isEditing) {
//             setIsEditing(false);
//         } else {
//             setIsEditing(true);
//         }
//     };

    const handleUpdate = async (e) => {
        const updatedPost = {
            title: title || defaultValue.current.title,
            content: content || defaultValue.current.content,
            image: file || defaultValue.current.image,
            post_category_id: cate || defaultValue.current.post_category_id,
        };


//    const handleUpdate = async (e) => {
//        const updatedPost = { title, content, image: file, post_category_id: cate };

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append('name', fileName);
            data.append('file', file);
            updatedPost.image = fileName;
        }
        try {
            await axios.put(
                'http://localhost:9000/forums/posts/' + postDetail._id,
                updatedPost
            );
            window.location.replace(
                'http://localhost:3000/forum/post/postdetail/' + postDetail._id
            );
        } catch (err) {}
    };

    const fetchPostDetail = () => {
        fetch(endPoint)
            .then((response) => response.json())
            .then((data) => {
                fetchUserInfo(data.user_id, data, setpostDetail);
            });
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-3 ps-5 pe-5'>
                    <Sidebar
                        showCreatePostForm={showCreatePostForm}
                        showForm={(showCreatePostForm) =>
                            setShowCreatePostForm(showCreatePostForm)
                        }
                    />
                </div>
                <div className='col-6'>
                    {showCreatePostForm && <CreatePost />}
                    <div className='row'>
                        <article>

//                             <header className='my-4'>
//                                 {isEditing ? (
//                                     <textarea
//                                         placeholder='Enter new title'
//                                         className='form-control border border-secondary'
//                                         defaultValue={postDetail.title}
//                                         onChange={(e) =>
//                                             setTitle(e.target.value)
//                                         }
//                                     ></textarea>
//                                 ) : (
//                                     <h1 className='fw-bolder'>
//                                         {postDetail.title}
//                                     </h1>
//                                 )}
//                                 <p className='text-muted fst-italic'>
//                                     {`Last edited ${countTimeDiff(
//                                         postDetail.updatedAt
//                                     )} by ${postDetail.username}`}
//                                 </p>
//                                 <p className='fw-normal'>
//                                     categories
//                                     <button className='btn btn-light btn-sm'>
//                                         urgent
//                                     </button>
//                                     <button className='btn btn-light btn-sm'>

                            <header class='my-4'>
                                <h1 className='fw-bolder'>
                                    {postDetail.title}
                                </h1>
                                <p class='text-muted fst-italic'>
                                    Last edited{' '}
                                    {countTimeDiff(postDetail.updatedAt)} by{' '}
                                    {postDetail.username}
                                </p>
                                <p class='fw-normal'>
                                    categories
                                    <button class='btn btn-light btn-sm'>
                                        urgent
                                    </button>
                                    <button class='btn btn-light btn-sm'>

                                        popular
                                    </button>
                                </p>
                            </header>

//                             {postDetail.image && (
//                                 <figure className='img-fluid'>
//                                     <img
//                                         src={`/postUpload/${postDetail.image}`}
//                                         className='d-block w-100 img-fluid'
//                                         alt='...'
//                                     />
//                                     A caption for the above image.
//                                 </figure>
//                             )}
//                             {isEditing ? (
//                                 <input
//                                     type='file'
//                                     className='custom-file-input'
//                                     id='inputGroupFile01'
//                                     onChange={(e) => setFile(e.target.files[0])}
//                                 />
//                             ) : null}
//                             <section
//                                 className='mb-4 '
//                                 style={{ textAlign: 'justify' }}
//                             >
//                                 {isEditing ? (
//                                     <textarea
//                                         placeholder='Please enter content'
//                                         defaultValue={postDetail.content}
//                                         onChange={(e) => {
//                                             setContent(e.target.value);
//                                         }}
//                                     ></textarea>
//                                 ) : (
//                                     <p className='lh-base mb-4 fs-5 lead'>
//                                         {postDetail.content}
//                                     </p>
//                                 )}
//                             </section>
//                             <section>
//                                 {isEditing ? (
//                                     <select
//                                         className='custom-select'
//                                         id='inputGroupSelect01'
//                                         style={{ height: '35px' }}
//                                         onChange={(e) =>
//                                             setCate(e.target.value)
//                                         }
//                                     >
//                                         <option selected>
//                                             Choose Category
//                                         </option>
//                                         {catId.map((cate) => (
//                                             <option
//                                                 key={cate._id}
//                                                 value={cate._id}
//                                             >
//                                                 {cate.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 ) : null}
//                             </section>

//                             {currentUser.id === postDetail.user_id && (
//                                 <>
//                                     <button
//                                         type='button'
//                                         className='btn btn-danger'
//                                         onClick={handleDelete}
//                                     >
//                                         Delete
//                                     </button>
//                                     <button
//                                         type='button'
//                                         className='btn btn-secondary'
//                                         onClick={handleEdit}
//                                     >
//                                         Edit
//                                     </button>
//                                 </>
//                             )}
//                             {isEditing && (
//                                 <button
//                                     type='button'
//                                     className='btn btn-secondary'
//                                     onClick={handleUpdate}
//                                 >
//                                     Update
//                                 </button>
//                             )}
//                         </article>
                        <CommentSection />

                            <figure class='img-fluid'>
                                <img src={`/postUpload/${postDetail.image}`} class="d-block w-100 img-fluid" alt="..." />
                            </figure>
                            <section className='mb-4 ' style={{ textAlign: 'justify' }}>
                                <p className='lh-base mb-4 fs-5 lead'>{postDetail.content}</p>
                            </section>
                            {currentUser.id === postDetail.user_id && (
                                <>
                                    <button type='button' className='btn btn-danger' onClick={handleDelete}>Delete</button>
                                    <button type='button' className='btn btn-secondary' data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                </>
                            )}
                        </article>
                        <CommentSection />
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Post</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleSubmit(handleUpdate)} enctype='multipart/form-data'>
                                <div class='row'>
                                    <div class='form-group mb-3 col-7'>
                                        <label for='posttitle'>Title</label>
                                        <input type='text' class={`form-control border border-secondary ${errors.title ? 'is-invalid' : ''}`} placeholder='Post Title' id='posttitle' defaultValue={postDetail && postDetail.title} {...register('title')} onChange={(e) => setTitle(e.target.value)} />
                                        <div className='invalid-feedback'> {errors.title?.message}</div>
                                    </div>
                                    <div class='form-group mb-3 col-5'>
                                        <label for='inputGroupSelect01'>
                                            Category
                                        </label>
                                        <div>
                                            <select class={`custom-select  ${errors.cat ? 'is-invalid' : ''}`} id='inputGroupSelect01' style={{ height: '35px' }} {...register('cat')} onChange={(e) => setCate(e.target.value)}>
                                                <option value="0"> Choose Category</option>
                                                {catId.map((cate) => (
                                                    <option value={cate._id} selected={postDetail && postDetail.post_category_id === cate._id ? "selected" : ""}>
                                                        {cate.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className='invalid-feedback'>
                                                {errors.cat?.message}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='form-group mb-3'>
                                    <label for='postcontent'>Content</label>
                                    <textarea
                                        class={`form-control border border-secondary ${errors.content ? 'is-invalid' : ''
                                            }`}
                                        placeholder='Post Content'
                                        id='postcontent' defaultValue={postDetail && postDetail.content} {...register('content')} onChange={(e) => { setContent(e.target.value); }}
                                    ></textarea>
                                    <div className='invalid-feedback'>
                                        {errors.content?.message}
                                    </div>
                                </div>

                                <div class='form-group mb-3'>
                                    <div class='custom-file'>
                                        <label class='custom-file-label' for='inputGroupFile01'>Upload Image</label>
                                        <br />
                                        <input
                                            type='file'
                                            class={`custom-file-input ${errors.image ? 'is-invalid' : ''
                                                }`}
                                            id='inputGroupFile01'
                                            {...register('image')}
                                            onChange={(e) =>
                                                setFile(e.target.files[0])
                                            }
                                        />
                                        <div className='invalid-feedback'>
                                            {errors.image?.message}
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary" onClick={() => {

                                        unregister("title", { keepDefaultValue: true });

                                        unregister("content", { keepDefaultValue: true });

                                        unregister("cat", { keepDefaultValue: true });

                                        unregister("image", { keepDefaultValue: true });

                                    }}>Upload</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
