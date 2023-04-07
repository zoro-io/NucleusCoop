Game.FileSymlinkExclusions = ["BlackOps.exe.19132.STEAMSTART", "BlackOps.exe", "BlackOpsMP.exe.21272.STEAMSTART", "BlackOpsMP.exe", "steamAPI.log", "steam_api.dll"];
Game.DirSymlinkCopyInstead = ["players"];
Game.FileSymlinkCopyInstead = ["binkw32.dll", "installscript.vdf", "localization.txt", "codlogo.bmp", "cod.bmp"];
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
Game.Hook.ForceFocus = true;
Game.PreventWindowDeactivation = false;
Game.KeyboardPlayerSkipPreventWindowDeactivate = false;
Game.Hook.ForceFocusWindowName = "BGamer: Black Ops";
Game.SupportsKeyboard = true;
Game.KillProcessesOnClose = ["END", "cmd", "Server"];
Game.SteamID = "42700";
Game.GUID = "CallofDutyBlackOpsZM";
Game.LauncherExe = "ZoroLauncher.exe";
Game.LauncherTitle = "ZoroLauncher";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = false;
Game.HasDynamicWindowTitle = true;
Game.SupportsPositioning = true;
Game.ForceWindowTitle = true; 
Game.FlawlessWidescreen = "";
Game.SetForegroundWindowElsewhere = true;
Game.DontReposition = false;
Game.DontResize = true;
Game.HookFocus = true;
Game.FakeFocus = false;
Game.DontRemoveBorders = true;
Game.ResetWindows = true;
Game.SetTopMostAtEnd = false; 
Game.PauseBetweenStarts = 0;
Game.HideTaskbar = true;
Game.Description =
  "Tested with the Steam and Fitgirl Repack version of the game, it's recommended you have the dlc too. Steam doesn't need to be running when you use the script. The game needs to be set to English language for the script to work. You can change this by right clicking the game in your steam library and selecting the properties menu, then selecting the Language tab. Select English from the dropdown menu and the required files will be downloaded. Your antivirus may delete files the script needs, if the script doesn't work this is the first thing to check. If you find it has deleted files you may need to remove and redownload the script. There are two ways to start a game: 1) The first player starts searching for an online game (it will only find players connected to your local network) after around 7 seconds it will stop searching and start hosting instead, at this point the other players can join by searching the same game mode via the online menu. 2) The first player creates a custom game and then uses the friends menu to send invites to the other players. For invites to work  make sure you set your party to open. Make sure you press the END key, when all the instances have finished loading, to lock input. Press it again at any time to unlock input. Credits/Thanks to The Project Nova Team https://projectnova.us/ for the LAN mod, and Pinecone from their forums for his invaluable advice! Script contributors: Rip3535, Pizzo and Zerofox. Also huge thanks to Talos, Ilyaki, Dr.Oldboi and the rest of the SplitScreenDreams discord.";

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
// Handled on input lock/unlock, don't enable this by default
Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
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

Game.Play = function() {
  if (Context.PlayerID == 0) {
    Game.StartArguments = "server";
  } else {
    Game.StartArguments = "zm";
  }
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
  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\BlackOps - Player " + (Context.PlayerID + 1) + ".exe")) {
    var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\BlackOps - Player " + (Context.PlayerID + 1) + ".exe"; 
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\BlackOps.exe"); 
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dwkey.dat")) {
    var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dwkey.dat"; 
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\dwkey.dat"); 
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ZoroLauncher.exe"; 
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\ZoroLauncher.exe"); 
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  // Resolution and positioning
  var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\config_mp.cfg"; 
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Config\\config_mp.cfg"); 
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dxgi.dll"; 
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "DX9Wrapper\\dxgi.dll"); 
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dxgi.ini"; 
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "DX9Wrapper\\dxgi.ini"); 
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  // Networking
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\bgset\\BGSetWritter.exe"], false, 10);
  if (Context.PlayerID == 0) {
    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Server.exe")) {
      var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Server.exe"; 
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "BGT5Package\\BlackOps.exe"); 
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }
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
  // Resolution and Positioning Editing
  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dxgi.ini";
  var width = String(Context.Width);
  var height = String(Context.Height);
  var XOffset;
  var YOffset;
  var players = Context.NumberOfPlayers;
  switch(players) {
    case 1: // if only 1 player
      // set player 1 to fullscreen w/ no offset
      XOffset = 0.0;
      YOffset = 0.0;
      break;
    case 2: // if 2 players
      if (Context.PlayerID == 0){ // if player 1
          XOffset = 0.0;
          YOffset = 0.0;
      } else { // if player 2
          XOffset = width
          YOffset = height;
      }
      break;
    case 3: // if 3 players
      if (Context.PlayerID == 0){ // if player 1 (top left)
        XOffset = 0.0;
        YOffset = 0.0;
      } else if (Context.PlayerID == 1){ // if player 2 (top right)
        XOffset = width;
        YOffset = 0.0;
      } else { // if player 3 (bottom half of the screen)
        XOffset = 0.0;
        YOffset = height;
        width = width * 2;  // sets the width to take full bottom half of screen
      }
      break;
    case 4: // if 4 players
      if (Context.PlayerID == 0){ // if player 1 (top left)
        XOffset = 1;
        YOffset = 1;
      } else if (Context.PlayerID == 1){ // if player 2 (top right)
        XOffset = width;
        YOffset = 0.0;
      } else if (Context.PlayerID == 2){ // if player 3 (bottom left)
        XOffset = 0.0;
        YOffset = height;
      } else { // if player 4 (bottom right)
        XOffset = width;
        YOffset = height;
      }
  }
  // Graphics and window
  if (Context.IsKeyboardPlayer == true) {
    var disable0 = "46|DisabledToGame=false";
    var disable1 = "49|DisabledToGame=false";
    var disable2 = "65|DisabledToGame=true";
    var disable3 = "75|SlotReassignment=";
  } else {
    var disable0 = "46|DisabledToGame=true";
    var disable1 = "49|DisabledToGame=true";
    var disable2 = "65|DisabledToGame=false";
    var disable3 = "75|SlotReassignment="; //+ Context.NumberOfPlayers - Context.PlayerID;
  }
  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dxgi.ini";
  Context.ReplaceLinesInTextFile(txtPath, [disable0, disable1, disable2, disable3], "utf-8");
  Context.ReplaceLinesInTextFile(
    txtPath,
    [
      Context.FindLineNumberInTextFile(txtPath, "Borderless=", Nucleus.SearchType.StartsWith) + "|Borderless=true",
      Context.FindLineNumberInTextFile(txtPath, "Center=", Nucleus.SearchType.StartsWith) + "|Center=false",
      Context.FindLineNumberInTextFile(txtPath, "XOffset", Nucleus.SearchType.StartsWith) + "|XOffset=" + XOffset + 1,
      Context.FindLineNumberInTextFile(txtPath, "YOffset", Nucleus.SearchType.StartsWith) + "|YOffset=" + YOffset + 1,
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
      Context.FindLineNumberInTextFile(txtPath, "seta r_fullscreen", Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_customMode", Nucleus.SearchType.StartsWith) + "|seta r_customMode \"" + width + "x" + height + "\"",
      Context.FindLineNumberInTextFile(txtPath, "seta r_mode", Nucleus.SearchType.StartsWith) + '|seta r_mode "' + width + "x" + height + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_mode", Nucleus.SearchType.StartsWith) + '|seta r_mode "' + width + "x" + height + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_displayMode", Nucleus.SearchType.StartsWith) + '|seta r_displayMode "windowed (no border)"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aspectRatio", Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "custom"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_customAspectRatio", Nucleus.SearchType.StartsWith) + '|seta r_customAspectRatio "' + Context.AspectRatioDecimal + '"'
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
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

          ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);

          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);

          // Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move moessages
          //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
          ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

          ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

          ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5, true, true, true, true, true);

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
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

          // Intentionally disable focus so all the instances don't respond to input at the same time
          ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);

          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
          ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

          ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);

          // Intentionally disable focus so all the instances don't respond to input at the same time
          ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);

          // Enable the bypass: allow any raw input to pass
          ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, true);
      }
  }

};

