import * as vscode from 'vscode';

// Function taken from: https://github.com/DavidBabel/clever-vscode/blob/master/src/controlers/maximize.ts
let expanded = false;
export async function toggleMaximizePane(withSideBar: boolean = false) {
	if (expanded) {
		if (withSideBar) {
			await vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility');
		}
		await vscode.commands.executeCommand('workbench.action.evenEditorWidths');
		await vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup');
	} else {
		await vscode.commands.executeCommand('workbench.action.maximizeEditor');
		await vscode.commands.executeCommand('workbench.action.maximizeEditor');
	}
	expanded = !expanded;
}

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('togglemaxeditor.toggleMaximizeEditor', () => {
		toggleMaximizePane()
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
