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
var PW = android.widget.PopupWindow;
var LL = new android.widget.LinearLayout;
var Runnable = java.lang.Runnable;
var OCL = android.view.View.OnClickListener;
var CD = android.graphics.drawable.ColorDrawable;
var RL = android.widget.RelativeLayout;

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
      GUI = new PW(layout, RL.LayoutParams.WRAP_CONTENT, RL.LayoutParams.WRAP_CONTENT);
      GUI.setBackgroundDrawable(new CD(trans));
      GUI.showAtLocation(ctx.getWindow().getDecorView(), right | center, 10, 20);
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
      
      var title = new TV(ctx);
      title.setTextSize("27");
      title.setText("Essentials");
      title.setTextColor(dodgerblue);
      title.setGravity(center);
      menuLayout.addView(title);
      
      var author = new TV(ctx);
      author.setTextSize("25");
      author.setText("Made by AllMCPE");
      author.setTextColor(dodgerblue);
      author.setGravity(center);
      menuLayout.addView(author);
            
      /*
      ----------
      */
            
      var s1b1 = new Button(ctx);
      s1b1.setText("Fly Mode On");
      s1b1.setTextColor(teal);
      s1b1.setBackgroundDrawable(new CD(dodgerblue));
      s1b1.setOnClickListener(new OCL({
          onClick: function(viewarg){
              Player.setCanFly(1);
          }
      }));
      menuLayout.addView(s1b1);
            
      var s1b2 = new Button(ctx);
      s1b2.setText("Fly Mode Off");
      s1b2.setTextColor(teal);
      s1b2.setBackgroundDrawable(new CD(dodgerblue));
      s1b2.setOnClickListener(new OCL({
          onClick: function(viewarg){
              Player.setCanFly(0);
          }
      }));
      menuLayout.addView(s1b2);
            
      /*
      ----------
      */
            
      var s2b1 = new Button(ctx);
      s2b1.setText("Speed 1");
      s2b1.setTextColor(deeppink);
      s2b1.setBackgroundDrawable(new CD(dodgerblue));
      s2b1.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, false, true);
          }
      }));
      menuLayout.addView(s2b1);
      
      menu = new PW(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
      menu.setBackgroundDrawable(new CD(black));
      menu.showAtLocation(ctx.getWindow().getDecorView(), right | top, 0, 0);
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
      xButton.setTextColor(red);
      xButton.setOnClickListener(new OCL({
      onClick: function(viewarg){
      exitUI.dismiss();
      menu.dismiss();
      }
      }));
      xLayout.addView(xButton);
      exitUI = new PW(xLayout, dip2px(40), dip2px(40));
      exitUI.setBackgroundDrawable(new CD(trans));
      exitUI.showAtLocation(ctxe.getWindow().getDecorView(), right | top, 0, 0);
      }catch(exception){
      print(exception);
      }
      }}));
      }
