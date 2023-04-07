using System;
using System.ComponentModel;
using System.Drawing;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Windows.Forms;

namespace ZoroLauncher
{
	// Token: 0x0200000C RID: 12
	public partial class SList : Form
	{
		// Token: 0x0600003A RID: 58 RVA: 0x0000219D File Offset: 0x0000039D
		public SList(MainWindow f)
		{
			this.InitializeComponent();
			this.mMainWindow = f;
			new Thread(delegate()
			{
				try
				{
					this.StartListener();
				}
				catch (Exception ex)
				{
					Console.WriteLine("Error");
				}
			}).Start();
		}

		// Token: 0x0600003B RID: 59 RVA: 0x00003508 File Offset: 0x00001708
		private void StartListener()
		{
			UdpClient udpClient = new UdpClient(11000);
			IPEndPoint ipendPoint = new IPEndPoint(IPAddress.Any, 11000);
			try
			{
				int i = 0;
				while (i < 1)
				{
					byte[] array = udpClient.Receive(ref ipendPoint);
					string text = ipendPoint.ToString().Remove(ipendPoint.ToString().LastIndexOf(":"));
					string item = string.Concat(new string[]
					{
						"HostIP: ",
						text,
						" | Connected Clients: ",
						Encoding.ASCII.GetString(array, 0, array.Length),
						"\n"
					});
					int num = this.LBservers.FindString("HostIP: " + text);
					bool flag = num == -1;
					if (flag)
					{
						this.Lsnum.Text = (Convert.ToInt32(this.Lsnum.Text) + 1).ToString();
						this.LBservers.Items.Add(item);
					}
				}
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.ToString());
			}
			finally
			{
				udpClient.Close();
			}
		}

		// Token: 0x0600003C RID: 60 RVA: 0x000021DA File Offset: 0x000003DA
		private void Brefresh_Click(object sender, EventArgs e)
		{
			this.Lsnum.Text = "0";
			this.LBservers.Items.Clear();
		}

		// Token: 0x0600003D RID: 61 RVA: 0x00002068 File Offset: 0x00000268
		private void SList_Closing(object sender, EventArgs e)
		{
		}

		// Token: 0x0600003E RID: 62 RVA: 0x0000364C File Offset: 0x0000184C
		private void Bconnect_Click(object sender, EventArgs e)
		{
			/*
An exception occurred when decompiling this method (0600003E)

ICSharpCode.Decompiler.DecompilerException: Error decompiling System.Void ZoroLauncher.SList::Bconnect_Click(System.Object,System.EventArgs)

 ---> System.NullReferenceException: Object reference not set to an instance of an object.
   at ICSharpCode.Decompiler.ILAst.ILAstOptimizer.IntroducePropertyAccessInstructions(ILExpression expr, ILExpression parentExpr, Int32 posInParent) in D:\a\dnSpy\dnSpy\Extensions\ILSpy.Decompiler\ICSharpCode.Decompiler\ICSharpCode.Decompiler\ILAst\ILAstOptimizer.cs:line 1589
   at ICSharpCode.Decompiler.ILAst.ILAstOptimizer.IntroducePropertyAccessInstructions(ILNode node) in D:\a\dnSpy\dnSpy\Extensions\ILSpy.Decompiler\ICSharpCode.Decompiler\ICSharpCode.Decompiler\ILAst\ILAstOptimizer.cs:line 1579
   at ICSharpCode.Decompiler.ILAst.ILAstOptimizer.IntroducePropertyAccessInstructions(ILNode node) in D:\a\dnSpy\dnSpy\Extensions\ILSpy.Decompiler\ICSharpCode.Decompiler\ICSharpCode.Decompiler\ILAst\ILAstOptimizer.cs:line 1576
   at ICSharpCode.Decompiler.ILAst.ILAstOptimizer.IntroducePropertyAccessInstructions(ILNode node) in D:\a\dnSpy\dnSpy\Extensions\ILSpy.Decompiler\ICSharpCode.Decompiler\ICSharpCode.Decompiler\ILAst\ILAstOptimizer.cs:line 1576
   at ICSharpCode.Decompiler.ILAst.ILAstOptimizer.Optimize(DecompilerContext context, ILBlock method, AutoPropertyProvider autoPropertyProvider, StateMachineKind& stateMachineKind, MethodDef& inlinedMethod, AsyncMethodDebugInfo& asyncInfo, ILAstOptimizationStep abortBeforeStep) in D:\a\dnSpy\dnSpy\Extensions\ILSpy.Decompiler\ICSharpCode.Decompiler\ICSharpCode.Decompiler\ILAst\ILAstOptimizer.cs:line 244
   at ICSharpCode.Decompiler.Ast.AstMethodBodyBuilder.CreateMethodBody(IEnumerable`1 parameters, MethodDebugInfoBuilder& builder) in D:\a\dnSpy\dnSpy\Extensions\ILSpy.Decompiler\ICSharpCode.Decompiler\ICSharpCode.Decompiler\Ast\AstMethodBodyBuilder.cs:line 123
   at ICSharpCode.Decompiler.Ast.AstMethodBodyBuilder.CreateMethodBody(MethodDef methodDef, DecompilerContext context, AutoPropertyProvider autoPropertyProvider, IEnumerable`1 parameters, Boolean valueParameterIsKeyword, StringBuilder sb, MethodDebugInfoBuilder& stmtsBuilder) in D:\a\dnSpy\dnSpy\Extensions\ILSpy.Decompiler\ICSharpCode.Decompiler\ICSharpCode.Decompiler\Ast\AstMethodBodyBuilder.cs:line 88
   --- End of inner exception stack trace ---
   at ICSharpCode.Decompiler.Ast.AstMethodBodyBuilder.CreateMethodBody(MethodDef methodDef, DecompilerContext context, AutoPropertyProvider autoPropertyProvider, IEnumerable`1 parameters, Boolean valueParameterIsKeyword, StringBuilder sb, MethodDebugInfoBuilder& stmtsBuilder) in D:\a\dnSpy\dnSpy\Extensions\ILSpy.Decompiler\ICSharpCode.Decompiler\ICSharpCode.Decompiler\Ast\AstMethodBodyBuilder.cs:line 92
   at ICSharpCode.Decompiler.Ast.AstBuilder.AddMethodBody(EntityDeclaration methodNode, EntityDeclaration& updatedNode, MethodDef method, IEnumerable`1 parameters, Boolean valueParameterIsKeyword, MethodKind methodKind) in D:\a\dnSpy\dnSpy\Extensions\ILSpy.Decompiler\ICSharpCode.Decompiler\ICSharpCode.Decompiler\Ast\AstBuilder.cs:line 1533
*/;
		}

		// Token: 0x04000031 RID: 49
		private const int listenPort = 11000;

		// Token: 0x04000032 RID: 50
		private MainWindow mMainWindow = null;
	}
}
