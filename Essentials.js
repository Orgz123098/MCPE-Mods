var black = android.graphics.Color.BLACK;
var white = android.graphics.Color.WHITE;
var magenta = android.graphics.Color.MAGENTA;
var red = android.graphics.Color.RED;
var blue = android.graphics.Color.BLUE;
var yellow = android.graphics.Color.YELLOW;
var green = android.graphics.Color.GREEN;
var cyan = android.graphics.Color.CYAN;
var trans = android.graphics.Color.TRANSPARENT;
var dodgerblue = android.graphics.Color.parseColor("#1E90FF");
var deeppink = android.graphics.Color.parseColor("#FF1493");
var teal = android.graphics.Color.parseColor("#008080");

var center = android.view.Gravity.CENTER;
var right = android.view.Gravity.RIGHT;
var left = android.view.Gravity.LEFT;
var top = android.view.gravity.TOP;
var bottom = android.view.Gravity.BOTTOM;

var TV = android.widget.TextView;
var Button = android.widget.Button;
var PopupWindow = android.widget.PopupWindow;
var LL = new android.widget.LinearLayout;
var Runnable = java.lang.Runnable;
var OCL = android.view.View.OnClickListener;

var GUI;
      var menu;
      var exitUI;
      function dip2px(dips){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
      }
      function newLevel(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new Runnable({ run: function(){
      try{
      var layout = new LL(ctx);
      layout.setOrientation(1);
      var menuBtn = new Button(ctx);
      menuBtn.setText('Menu');
      menuBtn.setOnClickListener(new OCL({
      onClick: function(viewarg){
      mainMenu();
      exit();
      }
      }));
      layout.addView(menuBtn);
      GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
      GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 10, 20);
      }catch(err){
      print('An error occured: ' + err);
      }
      }}));
      }
       function mainMenu(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new Runnable({ run: function(){
      try{
      var menuLayout = new LL(ctx);
      var menuScroll = new android.widget.ScrollView(ctx);
      var menuLayout1 = new LL(ctx);
      menuLayout.setOrientation(1);
      menuLayout1.setOrientation(1);
      menuScroll.addView(menuLayout);
      menuLayout1.addView(menuScroll);
      
      
      
      menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
      menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
      }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }
      function exit(){
      var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctxe.runOnUiThread(new Runnable({ run: function(){
      try{
      var xLayout = new LL(ctxe);
      var xButton = new Button(ctxe);
      xButton.setText('X');
      xButton.setTextColor(android.graphics.Color.WHITE);
      xButton.setOnClickListener(new OCL({
      onClick: function(viewarg){
      exitUI.dismiss();
      menu.dismiss();
      }
      }));
      xLayout.addView(xButton);
      exitUI = new android.widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
      exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      exitUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
      }catch(exception){
      print(exception);
      }
      }}));
      }
