import { Badge } from '@material-ui/core'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import React from 'react'

function Navbar() {
    const style="text-[14px] cursor-pointer ml-[25px]"
    return (
        <div className='navbar h-[60px] shadow-md relative z-10'>
            <div className='wrapper pl-[20px] pr-[20px] pt-[20px] pb-[20px] flex justify-between items-center'>
                <div className='left flex flex-1 items-center'>
                    {/* left div */}
                    <div className='language cursor-pointer text-[16px]'>
                        En
                    </div>
                    <div className='searchInput flex border-[2px] border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px] transition-all'>
                        <input className='input outline-none' type='text'/>
                        <Search className='' style={{fontsize: '16px'}}/>
                    </div>
                </div>

                {/* logo */}
                <div className='flex-1 center text-center '>
                    <div className='logo font-bold text-lg'>
                        Summer Kings
                    </div>
                </div>




                <div className='right flex flex-1 items-center justify-end'>
                    <div className={style}>Register</div>
                    <div className={style}>Sign In</div>
                    <div className={style}>
                    <Badge badgeContent={2} color='primary' >
                        <ShoppingCartOutlined/>
                    </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
