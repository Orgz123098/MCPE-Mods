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
var crimson = android.graphics.Color.parseColor("#DC143C");

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
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, 0, false, true);
          }
      }));
      menuLayout.addView(s2b1);
            
      var s2b2 = new Button(ctx);
      s2b2.setText("Speed 2");
      s2b2.setTextColor(deeppink);
      s2b2.setBackgroundDrawable(new CD(dodgerblue));
      s2b2.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, 1, false, true);
          }
      }));
      menuLayout.addView(s2b2);
            
      var s2b3 = new Button(ctx);
      s2b3.setText("Speed 3");
      s2b3.setTextColor(deeppink);
      s2b3.setBackgroundDrawable(new CD(dodgerblue));
      s2b3.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, 2, false, true);
          }
      }));
      menuLayout.addView(s2b3);
            
      var s2b4 = new Button(ctx);
      s2b4.setText("Speed 4");
      s2b4.setTextColor(deeppink);
      s2b4.setBackgroundDrawable(new CD(dodgerblue));
      s2b4.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, 3, false, true);
          }
      }));
      menuLayout.addView(s2b4);
            
      var s2b5 = new Button(ctx);
      s2b5.setText("Speed 5");
      s2b5.setTextColor(deeppink);
      s2b5.setBackgroundDrawable(new CD(dodgerblue));
      s2b5.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, 4, false, true);
          }
      }));
      menuLayout.addView(s2b5);
            
      var s2b10 = new Button(ctx);
      s2b10.setText("Speed 10");
      s2b10.setTextColor(deeppink);
      s2b10.setBackgroundDrawable(new CD(dodgerblue));
      s2b10.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, 9, false, true);
          }
      }));
      menuLayout.addView(s2b10);
            
      var s2b11 = new Button(ctx);
      s2b11.setText("Speed 20");
      s2b11.setTextColor(deeppink);
      s2b11.setBackgroundDrawable(new CD(dodgerblue));
      s2b11.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, 19, false, true);
          }
      }));
      menuLayout.addView(s2b11);
            
      var s2b12 = new Button(ctx);
      s2b12.setText("Speed 30");
      s2b12.setTextColor(deeppink);
      s2b12.setBackgroundDrawable(new CD(dodgerblue));
      s2b12.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, 29, false, true);
          }
      }));
      menuLayout.addView(s2b12);
            
      var s2b13 = new Button(ctx);
      s2b13.setText("Speed 40");
      s2b13.setTextColor(deeppink);
      s2b13.setBackgroundDrawable(new CD(dodgerblue));
      s2b13.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, 39, false, true);
          }
      }));
      menuLayout.addView(s2b13);
      
      var s2b14 = new Button(ctx);
      s2b14.setText("Speed 50");
      s2b14.setTextColor(deeppink);
      s2b14.setBackgroundDrawable(new CD(dodgerblue));
      s2b14.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, 49, false, true);
          }
      }));
      menuLayout.addView(s2b14);
            
      var s2b15 = new Button(ctx);
      s2b15.setText("Speed 100");
      s2b15.setTextColor(deeppink);
      s2b15.setBackgroundDrawable(new CD(dodgerblue));
      s2b15.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*20, 99, false, true);
          }
      }));
      menuLayout.addView(s2b15);
            
      var s2b16 = new Button(ctx);
      s2b16.setText("Haste 1");
      s2b16.setTextColor(deeppink);
      s2b16.setBackgroundDrawable(new CD(dodgerblue));
      s2b16.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*20, 0, false, true);
          }
      }));
      menuLayout.addView(s2b16);
            
      var s2b17 = new Button(ctx);
      s2b17.setText("Haste 2");
      s2b17.setTextColor(deeppink);
      s2b17.setBackgroundDrawable(new CD(dodgerblue));
      s2b17.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*20, 1, false, true);
          }
      }));
      menuLayout.addView(s2b17);
            
      var s2b18 = new Button(ctx);
      s2b18.setText("Haste 3");
      s2b18.setTextColor(deeppink);
      s2b18.setBackgroundDrawable(new CD(dodgerblue));
      s2b18.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*20, 2, false, true);
          }
      }));
      menuLayout.addView(s2b18);
            
      var s2b19 = new Button(ctx);
      s2b19.setText("Haste 4");
      s2b19.setTextColor(deeppink);
      s2b19.setBackgroundDrawable(new CD(dodgerblue));
      s2b19.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*20, 0, false, true);
          }
      }));
      menuLayout.addView(s2b16);
            
      var s2b20 = new Button(ctx);
      s2b20.setText("Haste 5");
      s2b20.setTextColor(deeppink);
      s2b20.setBackgroundDrawable(new CD(dodgerblue));
      s2b20.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*20, 4, false, true);
          }
      }));
      menuLayout.addView(s2b20);
            
      var s2b21 = new Button(ctx);
      s2b21.setText("Haste 10");
      s2b21.setTextColor(deeppink);
      s2b21.setBackgroundDrawable(new CD(dodgerblue));
      s2b21.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*20, 9, false, true);
          }
      }));
      menuLayout.addView(s2b21);
            
      var s2b22 = new Button(ctx);
      s2b22.setText("Haste 20");
      s2b22.setTextColor(deeppink);
      s2b22.setBackgroundDrawable(new CD(dodgerblue));
      s2b22.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*20, 19, false, true);
          }
      }));
      menuLayout.addView(s2b22);
            
      var s2b23 = new Button(ctx);
      s2b23.setText("Haste 30");
      s2b23.setTextColor(deeppink);
      s2b23.setBackgroundDrawable(new CD(dodgerblue));
      s2b23.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*20, 29, false, true);
          }
      }));
      menuLayout.addView(s2b23);
            
      var s2b24 = new Button(ctx);
      s2b24.setText("Haste 40");
      s2b24.setTextColor(deeppink);
      s2b24.setBackgroundDrawable(new CD(dodgerblue));
      s2b24.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*20, 39, false, true);
          }
      }));
      menuLayout.addView(s2b24);
            
      var s2b25 = new Button(ctx);
      s2b25.setText("Haste 50");
      s2b25.setTextColor(deeppink);
      s2b25.setBackgroundDrawable(new CD(dodgerblue));
      s2b25.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*20, 49, false, true);
          }
      }));
      menuLayout.addView(s2b25);
            
      var s2b26 = new Button(ctx);
      s2b26.setText("Haste 100");
      s2b26.setTextColor(deeppink);
      s2b26.setBackgroundDrawable(new CD(dodgerblue));
      s2b26.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*20, 99, false, true);
          }
      }));
      menuLayout.addView(s2b26);
            
      var s2b27 = new Button(ctx);
      s2b27.setText("Strength 1");
      s2b27.setTextColor(deeppink);
      s2b27.setBackgroundDrawable(new CD(dodgerblue));
      s2b27.setOnClickListener(new OCL({
          onClick: function(viewarg){
                Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, 9999*20, 0, false, true);
          }
      }));
      menuLayout.addView(s2b27);
      
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
