/** 退出登录 */
$(".frameTopBtn a").click(function () {
    $.ajax({
        type:"post",
        url:getBasePath()+"userRest/logout",
        dataType:"json",
        data:"",
        success:function (data) {
            window.location.href = "login.html";
        }
    })
});