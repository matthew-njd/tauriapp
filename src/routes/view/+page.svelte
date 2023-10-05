<script lang="ts">
    import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';

    
    const sourceData = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    ];
	
    
    const tableSimple: TableSource = {
        // A list of heading labels.
        head: ['Name', 'Symbol', 'Weight'],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(sourceData, ['name', 'symbol', 'weight']),
        // Optional: The data returned when interactive is enabled and a row is clicked.
        meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'weight']),
    };

</script>

<h1 class="flex justify-center p-5 text-2xl">Search Page</h1>

<div class="p-5">
    <input class="input" type="text" placeholder="Search PO Number" />
</div>

<Table source={tableSimple} class="pl-5 pr-5" />