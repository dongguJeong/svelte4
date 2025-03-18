<script lang="ts">
  export let variant: 'striped' | 'normal' | undefined = 'normal';
  export let head: string[] = [];
  export let body: Record<string, string>[] = [];
  export let border: boolean | undefined = false;
  export let shadow: boolean | undefined = false;
  export let rounded: 'sm' | 'md' | 'lg' | 'none' | undefined = 'none';
  export let ghost: boolean | undefined = false;
  export let full: boolean | undefined = false;
  export let padding: 'sm' | 'md' | 'lg' | undefined = 'lg';
  export let textAlign: 'center' | 'left' | 'right' | undefined = 'center';

  export let style: string | undefined = '';
</script>

<table
  data-variant={variant}
  data-rounded={rounded}
  data-shadow={shadow}
  data-ghost={ghost}
  data-full={full}
  data-padding={padding}
  data-border={border}
  data-align={textAlign}
  {style}
>
  <thead>
    {#each head as tablehead}
      <th>{tablehead}</th>
    {/each}
  </thead>
  <tbody>
    {#each body as tableData}
      <tr>
        {#each Object.values(tableData) as data}
          <td>{data}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
  <slot name="table-footer" />
</table>

<style lang="scss">
  @use '../../style/mixin';
  @use '../../style/variable';

  table {
    font-size: 14px;
    border-radius: variable.$rounded-md;
    background-color: white;
    border: none;

    &[data-shadow='true'] {
      box-shadow: variable.$box-shadow;
    }

    &[data-ghost='true'] {
      background: transparent;
    }
    &[data-full='true'] {
      width: 100%;
    }

    &[data-border='true'] {
      border: 1.5px solid rgba(0, 0, 0, 0.2);

      tr {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }

      tr:last-child {
        border-bottom: none;
      }
    }

    &[data-rounded='sm'] {
      border-radius: variable.$rounded-sm;
    }

    &[data-rounded='md'] {
      border-radius: variable.$rounded-md;
    }
    &[data-rounded='lg'] {
      border-radius: variable.$rounded-lg;
    }

    &[data-padding='sm'] {
      th,
      td {
        padding: 6px 4px;
      }
    }

    &[data-padding='md'] {
      th,
      td {
        padding: 8px 10px;
      }
    }
    &[data-padding='lg'] {
      th,
      td {
        padding: 12px 16px;
      }
    }

    &[data-variant='striped'] {
      thead,
      tr:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }

    &[data-align='center'] {
      text-align: center;
    }
    &[data-align='left'] {
      text-align: left;
    }
    &[data-align='right'] {
      text-align: right;
    }
  }

  @include mixin.screen-sm {
    table {
      thead {
        display: none;
      }

      tbody {
        border: 1px solid black;
        tr {
          width: 100%;
          text-align: left;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
</style>
