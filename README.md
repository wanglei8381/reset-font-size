# reset-font-size
移动端页面开发font-size重置<br><br>

在移动页面制作过程中如何做适配呢<br>
一种解决方案是设置html的font-size大小，使用rem作单位<br>
首页选择一种机型做页面，然后调整font-size让其他机型自动适应<br>
一般设计图的大小 640, 750, 1242， 其对应的手机可视区大小分别是320, 375, 414<br>
比如你的设计图的大小是750的，其中设计稿中的100px对应的css中的px=100/2，转换成rem=100/2/16（假设html的font-size:16）<br>
为什么要除以2呢，这是因为在PC端设计图的像素和CSS中的像素就是相等的，是相等不是相同，而手机的像素越来越高但屏幕却没有与之匹配<br>
设计图的像素和手机像素是对应的，是物理像素和css中的像素不是一回事。参考：http://www.cnblogs.com/2050/p/3877280.html<br>
比如750（物理）的手机而可视区是375（css），即1css = 2物理<br>
比如1242（物理）的手机而可视区是414（css），即1css = 3物理<br>
简单说就是手机的布局视图比较大和pc端基本一致，而手机可视视图比较小，当我们在设置viewport的width=device-width时，他俩就一样大了<br>
布局视图=可视视图的目的就是不需要用户缩放和横向滚动条就能正常的查看网站的所有内容并且显示的文字的大小是合适<br>

###如何调整font-size的大小
具体参考：移动开发之设计稿转换页面单位尺寸 ——> http://www.itnose.net/detail/6495394.html<br>

###用法
方式1<br>
< script src="resetFontSize.js?375&20&1">< /script> <br>
375&32&1 : 一次顺序，基础视图大小&基础字体大小&初始化的缩放比例   <br>

方式2<br>
< script src="resetFontSize_XXXXX.js" data-alias="resetFontSize" data-size="375" data-scale="1" data-fontSize="32">< /script> <br>
如果更改js的名字，要加上data-alias="resetFontSize"来表明; <br>
data-size:基础视图大小；data-scale:初始化的缩放比例；data-fontSize：基础字体大小
