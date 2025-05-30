<script lang="ts">
	import { onMount } from 'svelte';
	import CtaButton from '$lib/components/button/cta-button.svelte';
	import PageContainer from '$lib/components/page-container.svelte';
	import PageSectionImage from '$lib/components/page-section/page-section-image.svelte';
	import PageSection from '$lib/components/page-section/page-section.svelte';
	import WindowsIcon from '$lib/components/icons/windows-icon.svelte';
	import { websiteUrl } from '$lib/helpers/constants';
	import DebianIcon from '$lib/components/icons/debian-icon.svelte';
	import ArchIcon from '$lib/components/icons/arch-icon.svelte';
	import AppImageIcon from '$lib/components/icons/app-image-icon.svelte';
	import type { PageData } from './$types';
	import NixIcon from '$lib/components/icons/nix-icon.svelte';
	import FlatpakIcon from '$lib/components/icons/flatpak-icon.svelte';

	export let data: PageData;

	const summaryClass = 'py-2 px-4 rounded link bg-darker justify-center h-full';

	let isLinux = false;

	onMount(() => {
		isLinux = navigator.userAgent.includes('Linux');
	});
</script>

<PageContainer
	title="Outer Wilds Mod Manager - Download Windows/Linux app"
	description="Download, install, and manage Outer Wilds mods using the Outer Wilds Mod Manager for Windows and Linux."
	imageUrl="{websiteUrl}/images/mod-manager.webp"
	imageWidth={940}
	imageHeight={760}
>
	<PageSection title="Outer Wilds Mod Manager" id="mod-manager" isNarrow>
		<div>
			<PageSectionImage
				imageUrl="/images/mod-manager.webp"
				title="Outer Wilds Mod Manager"
				noBorder
				width={940}
				height={760}
			/>
		</div>
		<div class="flex flex-col gap-4 my-4 rounded">
			<details name="platform" open={!isLinux}>
				<summary class={summaryClass}>For Windows</summary>
				<div class="p-4 flex flex-col gap-4 bg-dark">
					<CtaButton href={data.installerDownloadUrl} isExternal icon={WindowsIcon}>
						Download the Outer Wilds Mod Manager for Windows
					</CtaButton>
					<span>
						Not Working? Try the <a class="link" href={data.nsisInstallerDownloadUrl}
							>NSIS Installer for Windows</a
						>.
					</span>
				</div>
			</details>
			<details name="platform" open={isLinux}>
				<summary class={summaryClass}>For Linux</summary>
				<div class="p-4 flex flex-col gap-2 bg-dark">
					<div>
						<CtaButton href={data.debUrl} isExternal icon={DebianIcon}>
							Download .deb package for Debian
						</CtaButton>
					</div>
					<div>
						<CtaButton href={data.aurUrl} isExternal icon={ArchIcon}>
							AUR Package for Arch Linux
						</CtaButton>
					</div>
					<div>
						<CtaButton
							href="https://flathub.org/apps/com.outerwildsmods.owmods_gui"
							isExternal
							icon={FlatpakIcon}
						>
							Flatpak package for Linux
						</CtaButton>
					</div>
					<div>
						<CtaButton
							href="https://search.nixos.org/packages?channel=unstable&size=500&query=owmods"
							isExternal
							icon={NixIcon}
						>
							Nix Package
						</CtaButton>
					</div>
					<div>
						<CtaButton href={data.rpmUrl} isExternal icon={AppImageIcon}>
							Download RPM Package for RHEL Distros
						</CtaButton>
					</div>
					<div>
						<CtaButton href={data.appImageUrl} isExternal icon={AppImageIcon}>
							Download AppImage For Linux
						</CtaButton>
					</div>
					<span>
						On Steam Deck: Install the manager by going into Desktop Mode and searching "Outer
						Wilds" in the Discover app.</span
					>

					<span>
						Warning: Linux installs require that <a
							href="https://www.mono-project.com/"
							class="link"
							target="_blank"
							rel="noopener noreferrer">Mono 6.12.0</a
						> is installed and available on the PATH (excluding AUR, FlatPak, Nix).
					</span>
				</div>
			</details>
		</div>
		<p class="mt-4">For all your modding needs! With access to features such as:</p>
		<ul class="my-4">
			<li>Downloading mods;</li>
			<li>Updating mods;</li>
			<li>Enabling / disabling mods;</li>
			<li>Looking at all the great mods you have;</li>
			<li>Installing mods straight from the website;</li>
			<li>Installing mods from URLs and ZIP files;</li>
			<li>Importing and Exporting your list of enabled mods for easy sharing / setup;</li>
			<li>Running the game with mods enabled;</li>
			<li>
				Patching the game to run modded on Linux through <a
					href="https://www.mono-project.com/"
					class="link"
					rel="noopener noreferrer">Mono</a
				>.
			</li>
		</ul>
		<p>
			It also lets you install / update the{' '}
			<a class="link" href="/mods/owml">Outer Wilds Mod Loader</a> from within the app, so you don't
			need to deal with that yourself.
		</p>
	</PageSection>
	<PageSection title="Troubleshooting" id="troubleshooting" isNarrow>
		<p>
			If you need help, you can check <a
				class="link"
				href={`${data.repoUrl}/blob/main/owmods_gui/HELP.md`}
				target="_blank"
				rel="noopener">the FAQ file in the manager repo</a
			>. Or you can come ask on
			<a class="link" target="_blank" rel="noopener" href="https://discord.gg/9vE5aHxcF9"
				>The Outer Wilds Modding Discord Server</a
			>.
		</p>
	</PageSection>
	<PageSection title="How do I use this?" id="how-to-use" isNarrow>
		<ul>
			<li>Download the Outer Wilds Mod Manager installer;</li>
			<li>Run the downloaded .msi (you might need to ignore some Chrome / Windows warnings);</li>
			<li>Shortcuts are added to desktop and start menu, use them to run the manager;</li>
			<li>Run the manager;</li>
			<li>Install OWML;</li>
			<li>Head to the "Get Mods" tab to install any mods you want;</li>
			<li>Press the top right play button to launch the game;</li>
			<li>You won't believe what happens next.</li>
		</ul>
	</PageSection>
	<PageSection title="How do I uninstall it?" id="uninstall" isNarrow>
		<p>
			First, remember that uninstalling the Mod Manager won't uninstall your mods. Make sure to
			remove all mods and run the game once before uninstalling.
		</p>
		<p>
			You can uninstall the Mod Manager by searching for "Add or remove programs" in the start menu
			(or in the control panel), and then finding Outer Wilds Mod Manager in the list.
		</p>
		<p class="mt-4">To revert the game to its original state, verify the game files integrity:</p>
		<ul>
			<li>
				<b>Steam</b>: Library &gt; Right-click Outer Wilds &gt; Properties &gt; Local Files &gt;
				Verify integrity of game files.
			</li>
			<li>
				<b>Epic</b>: Library &gt; Click three dots under Outer Wilds &gt; Verify.
			</li>
		</ul>
	</PageSection>
	<PageSection title="I Hate GUIs!" id="cli" isNarrow>
		<p>That's not very nice, but a CLI version of the manager is available.</p>
		<p>
			Just follow the steps to compile <a class="link" href={`${data.repoUrl}/tree/main/owmods_cli`}
				>on the GitHub repository</a
			>. Or find the latest CLI release and download from there (if the format you need is
			available).
		</p>
		<p>
			Once installed, run <code>owmods help</code> for a list of available commands
		</p>
	</PageSection>
	<PageSection title="Legacy Manager" id="legacy-manager" isNarrow>
		<div>
			<PageSectionImage
				imageUrl="/images/mod-manager-legacy.webp"
				title="Legacy Outer Wilds Mod Manager"
				width={761}
				height={604}
			/>
		</div>
		<p>
			The legacy Outer Wilds Mod Manager is <a
				href="https://github.com/ow-mods/ow-mod-manager/releases/latest/download/OuterWildsModManager-Installer.exe"
				class="link">available here</a
			> if you need to mod the alpha.
		</p>
		<p>
			The legacy manager also <a
				href="https://github.com/ow-mods/ow-mod-manager/releases/latest/download/OuterWildsModManager-Portable.zip"
				class="link">has a portable version</a
			>
		</p>
	</PageSection>
</PageContainer>
