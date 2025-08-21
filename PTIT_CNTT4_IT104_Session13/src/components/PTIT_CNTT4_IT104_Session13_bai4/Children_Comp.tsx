import React from 'react';

function Children_Comp(props: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) {
    return (
        <div>
            <h3>Họ và tên bên component con: {props.name}</h3>
        </div>
    );
}

export default Children_Comp;
