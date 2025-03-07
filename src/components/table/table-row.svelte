<script lang="ts">

    export let name:string;
    export let email:string;
    export let user_type:string;
    export let joined:string;
    export let status:'PENDING' | 'APPROVED' | 'REJECT';

    const statusColor = {
        'PENDING' : 'pending',
        'APPROVED' : 'approved',
        'REJECT' : 'reject'
    }

</script>
    <tr>
        <th scope="row">{name}</th>
        <td>{email}</td>
        <td>{user_type}</td>
        <td>{joined}</td>
        <td>
            <div class="status {statusColor[status]}">{status}</div>
        </td>
    </tr>

<style lang="scss">

tr{
    border-bottom : 1px solid rgba(0,0,0,0.3);
    color : #868e96;
    td ,th {
        text-align : left;
        font-size : 14px;
        padding : 10px 0px;
    }

    th{ 
        font-weight : 500;
    }

    td:last-child{
        display: flex;
        align-items: center;
        padding-right : 6px;   
    }
   
}



.status{
    width : 78px;
    font-size : 14px;
    color : white;
    font-weight : 500;
    padding : 4px 6px;
    text-align: center;
}

.pending{
    background : linear-gradient( #C194FA 0%, #B67AF6 100%);

}

.approved{
    background : linear-gradient( #69A3EA 0%,#676FE1 100%);

}

.reject{
    background : linear-gradient( #FDB686 0%, #FF9A8D 100%);
}

</style>