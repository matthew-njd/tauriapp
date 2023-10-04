<script lang="ts">
	import '../app.postcss';
	import 'iconify-icon';
	import { AppShell, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';

    import { page } from '$app/stores';

	// Floating UI for Popups
	// import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	// import { storePopup } from '@skeletonlabs/skeleton';
	// storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

</script>

<!-- App Shell -->
<AppShell>

	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'} title="Home">
				<svelte:fragment slot="lead">
					<iconify-icon icon="material-symbols:home-app-logo" style="font-size: 2rem;" />
				</svelte:fragment>
				<span>Home</span>
			</AppRailAnchor>
			<AppRailAnchor href="/view" selected={$page.url.pathname === '/view'} title="View">
				<svelte:fragment slot="lead">
					<iconify-icon icon="material-symbols:search-rounded" style="font-size: 2rem;" />
				</svelte:fragment>
				<span>Search</span>
			</AppRailAnchor>
			<AppRailAnchor href="/create" selected={$page.url.pathname === '/create'} title="Add">
				<svelte:fragment slot="lead">
					<iconify-icon icon="material-symbols:add-rounded" style="font-size: 2.5rem;" />
				</svelte:fragment>
				<span>Add</span>
			</AppRailAnchor>
			<AppRailAnchor href="/update" selected={$page.url.pathname === '/update'} title="Edit">
				<svelte:fragment slot="lead">
					<iconify-icon icon="material-symbols:edit" style="font-size: 2rem;" />
				</svelte:fragment>
				<span>Edit</span>
			</AppRailAnchor>
			<AppRailAnchor href="/delete" selected={$page.url.pathname === '/delete'} title="Delete">
				<svelte:fragment slot="lead">
					<iconify-icon icon="material-symbols:delete-rounded" style="font-size: 2rem;" />
				</svelte:fragment>
				<span>Delete</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>

	<slot />
	
</AppShell>
