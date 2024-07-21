Game.FileSymlinkExclusions = ["BlackOps.exe.19132.STEAMSTART", "BlackOpsMP.exe.21272.STEAMSTART", "BlackOps.exe", "BlackOpsMP.exe", "steamAPI.log", "steam_api.dll"];
Game.DirSymlinkCopyInstead = ["bin", "players"];
Game.FileSymlinkCopyInstead = ["BO_Mods.bat", "config.cfg", "bgset.ini", "binkw32.dll", "installscript.vdf", "localization.txt", "codlogo.bmp", "cod.bmp"];
Game.GameName = "Call of Duty Black Ops Zombies";
Game.ExecutableName = "BlackOps.exe";
Game.ChangeExe = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.ForceSymlink = true;      
Game.UseNucleusEnvironment = false;
Game.PreventWindowDeactivation = false;
Game.KeyboardPlayerSkipFakeFocus = false; 
Game.KeyboardPlayerSkipPreventWindowDeactivate = false;
Game.Hook.ForceFocusWindowName = "BGamer: Black Ops";
Game.KillProcessesOnClose = ["bgT5Launcher", "END", "cmd", "Server"];
Game.SteamID = "42700";
Game.GUID = "CallofDutyBlackOpsZM";
Game.LauncherExe = "BO_Mods.bat";
Game.LauncherTitle = "ZoroLauncher";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;            
Game.NeedsSteamEmulation = false;               
Game.UseGoldberg = false;                                    
Game.HasDynamicWindowTitle = true;
Game.SupportsPositioning = true;
Game.ForceWindowTitle = true;  
Game.DontReposition = false;
Game.DontResize = false;
Game.HookFocus = true;
Game.FakeFocus = true;
Game.FakeFocusSendActivate = true;
Game.FakeFocusInterval = 20000; 
Game.PreventGameFocus = true; 
Game.DontRemoveBorders = false;
Game.ResetWindows = true;
Game.SetTopMostAtEnd = false;

Game.PauseBetweenStarts = 5;
Game.RequiresAdmin = true;             
Game.HideTaskbar = true;
Game.Description =
  'To start a game navigate to a private match in the first instance then let the other instances start. Once the others have started invite the other instances in the first one with the friends list or using the console command "sendInvite Playerx" where the "x" is the player number. The other instances can accept the invite by pressing F10 on a keyboard and mouse or the back/select button on controller. If using a controller for the first instance you will need to navigate menus with the keyboard. Credits/Thanks to The Project Nova Team https://projectnova.us/ for the LAN mod, and Pinecone from their forums for his invaluable advice! Script contributors: Rip3535, Pizzo and Zerofox. Also huge thanks to Talos, Ilyaki, Dr.Oldboi and the rest of the SplitScreenDreams discord.';

Game.PromptBetweenInstances = false;
Game.SupportsMultipleKeyboardsAndMice = true;
Game.KeyboardPlayerFirst = true;

  //USS deprecated options:
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.InjectHookXinput = false;
Game.HookSetCursorPos = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = false;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;
Game.SendNormalMouseInput = false;
Game.SendNormalKeyboardInput = false;
Game.SendScrollWheel = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = false;
Game.HookReRegisterRawInputMouse = false;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
// This hook should always be on, regardless of input lock
Game.ProtoInput.RegisterRawInputHook = true;
// This can always be enabled, since we are going to allow/disallow raw input with the bypass function
Game.ProtoInput.GetRawInputDataHook = true;
// We will be installing/uninstalling the filters manually so there's no need to
Game.ProtoInput.MessageFilterHook = false;
Game.ProtoInput.ClipCursorHook = false;
Game.ProtoInput.FocusHooks = false;
// These aren't problematic to leave on, since the external "freeze fake input input" when real input ISN'T locked will prevent these from interfering
Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.GetKeyStateHook = true;
Game.ProtoInput.GetAsyncKeyStateHook = true;
Game.ProtoInput.GetKeyboardStateHook = true;
Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
///Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;

Game.ProtoInput.DrawFakeCursor = false; // This is set in the input locking
Game.ProtoInput.BlockedMessages = [ 0x0008 ]; // Blocks WM_KILLFOCUS
Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];
// We can leave these on and not worry about input lock. 
// It doesn't matter if controller input still works since it won't get in the way
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;

var fpsCap = [
  "30",
  "60",
  "120",
  "144"
];

var fov = [
  "65 (default)",
  "80",
  "90",
  "120"
];

var modChoice = [
  "None",
  "Reimagined",
  "Perish",
  "Kowloon",
  "Renaissance"
];

//FPS Cap
Game.AddOption("FPS Cap", "", "Fps", fpsCap);
Game.AddOption("Field of View", "", "Fov", fov);

var gameMod = ["No", "Yes"];
Game.AddOption("Enable game_mod?", "To use this you must game_mod installed in your main install of Black Ops. When the first instance launches BGamer will also launch. Quickly turn on host mode and DON'T do anything else to it. The game should start on it's own.", "gamemod", gameMod);
Game.AddOption("Choose Mod", "(Enables game_mod automatically) The mod that will be loaded when you launch the game. Add the mods you want to use to the modChoice Array and make sure you type in the exact name.", "Mod", modChoice);


//FOV Choice
//Game.AddOption(
 // "FOV Choice", "", "Fov", fov
//);

//These lines will create a prompt at the start and ask the user to input text. Then you can use it as a value.
Game.CustomUserGeneralPrompts = [
  "If you are playing in LAN with other PCs, enter the IP of the Host computer only if this PC is a Client (if you are just playing on the same PC or this is the Host PC, leave it blank). "
];
Game.SaveAndEditCustomUserGeneralValues = false; //This, if enabled, will store in a txt file (inside Nucleus\scripts\gamefolder) the last text input the user entered


Game.Play = function() {

  // Moving Files
  // BGT5 Package


  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_api.dll")) {
    var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_api.dll"; 
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\steam_api.dll"); 
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgt5.dll")) {
    var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgt5.dll"; 
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\bgt5.dll"); 
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgT5lms.dll")) {
    var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgT5lms.dll"; 
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\bgT5lms.dll"); 
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
    var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\BlackOps - Player " + (Context.PlayerID + 1) + ".exe"; 
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\BlackOps.exe"); 
    System.IO.File.Copy(savePkgOrigin, savePath, true);

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dwkey.dat")) {
    var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dwkey.dat"; 
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\dwkey.dat"); 
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ZoroLauncher.exe")) {
  var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ZoroLauncher.exe"; 
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\ZoroLauncher.exe"); 
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  };
  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgT5Launcher.exe")) {
  var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgT5Launcher.exe"; 
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\bgT5Launcher.exe"); 
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  };

  // Resolution and positioning
  var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dxgi.dll"; 
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "DX9Wrapper\\dxgi.dll"); 
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dxgi.ini"; 
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "DX9Wrapper\\dxgi.ini"); 
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  // Networking
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\bgset\\BGSetWritter.exe"], false, 10);
  if (Context.PlayerID == 0) {
      var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Server.exe"; 
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\BlackOps.exe"); 
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgset.ini"; 
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "bgset\\0.ini"); 
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (Context.PlayerID == 1) {
    var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgset.ini"; 
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "bgset\\1.ini"); 
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (Context.PlayerID == 2) {
    var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgset.ini"; 
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "bgset\\2.ini"); 
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (Context.PlayerID == 3) {
    var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgset.ini"; 
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "bgset\\3.ini"); 
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

//Assign Mod
var selectedMod = Context.Options["Mod"];

var addAdditionalModParameter = "";
  if(selectedMod == "")
{
  addAdditionalModParameter = '';
}
  else
{
  addAdditionalModParameter = ' +set fs_game "mods/' + selectedMod + '"';
  Context.Options["gamemod"] = "Yes";
}
  var cfgDirectory = '"' + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players\\mods\\';

  ////////////////////////////////////////

  if (Context.Options["gamemod"] == "Yes" && Context.PlayerID == 0) {
    var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\BO_Mods.bat";
    var lines = ['rmdir /s /q ' + cfgDirectory,
      ,
      'cd bin',
      'launcher_ldr.exe game_mod.dll ../Server.exe' + addAdditionalModParameter,
  ];
    Context.WriteTextFile(Bat, lines);
    Context.RunAdditionalFiles ([Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgt5launcher.exe"], false, 10);
  }
  else if (Context.Options["gamemod"] == "Yes" && Context.PlayerID != 0) {
    var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\BO_Mods.bat";
    var lines = ['rmdir /s /q ' + cfgDirectory,
      ,
      'cd bin',
      'launcher_ldr.exe game_mod.dll ../"BlackOps - Player ' + (Context.PlayerID + 1) + '.exe"' + addAdditionalModParameter,
    ];
    Context.RunAdditionalFiles ([Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgt5launcher.exe"], false, 10);
    Context.WriteTextFile(Bat, lines);
  }
  else if (Context.Options["gamemod"] == "No" && Context.PlayerID == 0){
    var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\BO_Mods.bat";
    var lines = ["ZoroLauncher.exe /k server"];
    Context.WriteTextFile(Bat, lines);
  }
  else if (Context.Options["gamemod"] == "No" && Context.PlayerID != 0){
    var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\BO_Mods.bat";
    var lines = ["ZoroLauncher.exe /k zm"];
    Context.WriteTextFile(Bat, lines);
  }
  System.Threading.Thread.Sleep(2000);
  var secondPC;
  if (Context.CustomUserGeneralValues[0] != null) {
    secondPC = Context.CustomUserGeneralValues[0]
  } 
  else {
    secondPC = Context.LocalIP
  }

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgset.ini";
  var dict = [
      Context.FindLineNumberInTextFile(txtPath, "Host=", Nucleus.SearchType.StartsWith) + "|Host=" + secondPC
    ];
  Context.ReplaceLinesInTextFile(txtPath, dict);
  
  if (Context.CustomUserGeneralValues[0] != null) {
    if (Context.PlayerID == 0) {
      var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgset.ini";
      var dict = [
          Context.FindLineNumberInTextFile(txtPath, "Nickname=", Nucleus.SearchType.StartsWith) + "|Nickname=Player3",
          Context.FindLineNumberInTextFile(txtPath, "GameID=", Nucleus.SearchType.StartsWith) + "|GameID=2062495042"
        ];
      Context.ReplaceLinesInTextFile(txtPath, dict);
    }
    else if (Context.PlayerID == 1) {
      var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bgset.ini";
      var dict = [
          Context.FindLineNumberInTextFile(txtPath, "Nickname=", Nucleus.SearchType.StartsWith) + "|Nickname=Player4",
          Context.FindLineNumberInTextFile(txtPath, "GameID=", Nucleus.SearchType.StartsWith) + "|GameID=2062495053"
        ];
      Context.ReplaceLinesInTextFile(txtPath, dict);
    }
  }



  if (Context.PlayerID == 0 && Context.AspectRatioDecimal > 1.7 && (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Server.exe"))) {
    Context.PatchFile(
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Server.exe"),
      System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Server.exe"),
      [0x39, 0x8e, 0xe3, 0x3f],
      Context.ConvertToBytes(Context.AspectRatioDecimal)
    )
	}
	if (Context.AspectRatioDecimal > 1.7 && Context.PlayerID > 0) {
		Context.PatchFile(
	  System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\BlackOps - Player " + (Context.PlayerID + 1) + ".exe"),
	  System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\BlackOps - Player " + (Context.PlayerID + 1) + ".exe"),
	  [0x39, 0x8e, 0xe3, 0x3f],
      Context.ConvertToBytes(Context.AspectRatioDecimal)
	  )
	}
  

//Fps Cap
  var maxFpsChoice = "";
  switch (Context.Options["Fps"]) {
    case "30":
      maxFpsChoice = '"30"';
      break;
    case "60":
      maxFpsChoice = '"60"';
      break;
    case "120":
      maxFpsChoice = '"120"';
      break;
    case "144":
      maxFpsChoice = '"144"';
      break;
}

//FOV Choice
  var fovChoice = "";
  switch (Context.Options["Fov"]) {
    case "65 (default)":
      fovChoice = "65";
      break;
    case "80":
      fovChoice = "80";
      break;
    case "90":
      fovChoice = "90";
      break;
    case "120":
      fovChoice = "120";
      break;
  }

  


  var width = String(Context.Width);
  var height = String(Context.Height);

  // Graphics and window
  if (Context.IsKeyboardPlayer == true) {
    var disable0 = "46|DisabledToGame=false";
    var disable1 = "49|DisabledToGame=false";
    var disable2 = "65|DisabledToGame=true";
    var disable3 = "75|SlotReassignment=" + (Context.NumberOfPlayers - Context.PlayerID);
  } else {
    var disable0 = "46|DisabledToGame=false";
    var disable1 = "49|DisabledToGame=false";
    var disable2 = "65|DisabledToGame=false";
    var disable3 = "75|SlotReassignment=" + (Context.NumberOfPlayers - Context.PlayerID);
  }



  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dxgi.ini";
  Context.ReplaceLinesInTextFile(txtPath, [disable0, disable1, disable2, disable3], "utf-8");
  Context.ReplaceLinesInTextFile(
    txtPath,
    [
      Context.FindLineNumberInTextFile(txtPath, "Borderless=", Nucleus.SearchType.StartsWith) + "|Borderless=true",
      Context.FindLineNumberInTextFile(txtPath, "Center=", Nucleus.SearchType.StartsWith) + "|Center=false",
      Context.FindLineNumberInTextFile(txtPath, "OverrideRes", Nucleus.SearchType.StartsWith) + "|OverrideRes=" + width + "x" + height,
      Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=false",
      Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=true"
    ],
    "utf-8"
  );
  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\config.cfg";
  Context.ReplaceLinesInTextFile(
    txtPath,
    [
      Context.FindLineNumberInTextFile(txtPath, "seta r_customMode", Nucleus.SearchType.StartsWith) + '|seta r_customMode "' + width + "x" + height + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_mode", Nucleus.SearchType.StartsWith) + '|seta r_mode "' + width + "x" + height + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta gpad_enabled", Nucleus.SearchType.StartsWith) + '|seta gpad_enabled "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_shaderWarming", Nucleus.SearchType.StartsWith) + '|seta r_shaderWarming "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + "|seta com_maxfps \"" + maxFpsChoice + "\"",
      Context.FindLineNumberInTextFile(txtPath, "seta cg_fov_default", Nucleus.SearchType.StartsWith) + "|seta cg_fov_default \"" + fovChoice + "\"",
      Context.FindLineNumberInTextFile(txtPath, "seta cg_fov", Nucleus.SearchType.StartsWith) + "|seta cg_fov \"" + fovChoice + "\"",
      Context.FindLineNumberInTextFile(txtPath, "seta r_fullscreen", Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_displayMode", Nucleus.SearchType.StartsWith) + '|seta r_displayMode "windowed (no border)"'
    ],
    "utf-8"
  );



  Game.ProtoInput.OnInputLocked = function()
  {
      for (var i = 0; i < PlayerList.Count; i++)
      {
          var player = PlayerList[i];

          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);

          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);

          // Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move moessages
          //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

          ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);


          // Disable the bypass: let the input be processed by Proto Input
          ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, false);
      }
  }

  Game.ProtoInput.OnInputUnlocked = function()
  {
      for (var i = 0; i < PlayerList.Count; i++)
      {
          var player = PlayerList[i];

          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

          // Intentionally disable focus so all the instances don't respond to input at the same time
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);

          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

          ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);

          // Enable the bypass: allow any raw input to pass
          ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, true);
      };
  };
  System.Threading.Thread.Sleep(2000);
};
