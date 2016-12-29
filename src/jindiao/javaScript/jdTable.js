/**
 * Created by mfhj-dz-001-424 on 16/12/29.
 * 这里面是和angular无关的代码,主要实现菜单折叠,图片旋转等功能
 *
 */
    //每增加一个,就建立一个新的flag
    var flag = 1;
    $(document).ready(function(){
        $(".headerImg").click(function(){
            if (0 == flag) {
                $(".panel").slideUp("10000");
                flag = 1;
            } else {
                $(".panel").slideDown("10000");
                flag = 0;
            }
        });
    });


