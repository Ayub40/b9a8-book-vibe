import { toast } from "react-toastify";

const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

// const saveJobApplication = bookId => {
//     const storedJobApplications = getStoredJobApplication();
//     const exists = storedJobApplications.find(jobId => jobId === bookId);
//     if (!exists) {
//         storedJobApplications.push(bookId);
//         localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
//     }
// }


const saveJobApplication = bookId => {
    const storedJobApplications = getStoredJobApplication();
    const isExist = storedJobApplications.find(jobId => jobId === bookId);
    if (isExist) {
        return toast.error('Already Read')
    }
    storedJobApplications.push(bookId);
    localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    toast.success('Added read');
}




// ----------------------------------------------------------------------------------

const getWishlistBook = () => {
    const jobApplication = localStorage.getItem('book-applications');
    if (jobApplication) {
        return JSON.parse(jobApplication);
    }
    return [];
}

// const saveWishlistBook = bookId => {
//     const jobApplication = getWishlistBook();
//     const exists = jobApplication.find(jobId => jobId === bookId);
//     if (!exists) {
//         jobApplication.push(bookId);
//         localStorage.setItem('book-applications', JSON.stringify(jobApplication))
//     }
// }


const saveWishlistBook = bookId => {
    const jobApplication = getWishlistBook();
    const exists = jobApplication.find(jobId => jobId === bookId);
    if (!exists) {
        jobApplication.push(bookId);
        localStorage.setItem('book-applications', JSON.stringify(jobApplication))
    }
}


export { getStoredJobApplication, saveJobApplication, getWishlistBook, saveWishlistBook }

