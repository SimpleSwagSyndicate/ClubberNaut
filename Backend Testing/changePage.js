let prevPage = "Sign Up";

function changePage(page) {
    document.getElementById(prevPage).style.display = 'none';
    document.getElementById(page).style.display = 'block';
    prevPage = page;
}
