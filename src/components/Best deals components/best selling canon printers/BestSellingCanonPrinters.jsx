import React from 'react'
import { CommonCarocial } from '../../../Common swipper carocial/CommonCarocial';
import sellingprinters from './BestSellingprinters.module.css'
import { Link } from 'react-router-dom';
export const BestSellingCanonPrinters = () => {

    const data = [
        {
          id:1,
          model:'Canon PIXMA G2012',
          company:'Canon',
          description: "Canon PIXMA G2012 All-in-One Ink Tank Colour Printer (Black)",
          price: 12999,
          pic:'https://www.reliancedigital.in/medias/Canon-PIXMA-E470-All-In-One-Inkjet-Printer-491282647-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDk2M3xpbWFnZS9wbmd8aW1hZ2VzL2gzZC9oMWUvODkzMzE0NjA5OTc0Mi5wbmd8YmVmZTVlNmI1MGI2ZDVkYTg3YjcxMDVjYWQyMThhZDU1ZmYyNDg1NzRiMTU1OTI1MDY1MDI3MDY1NDQyZDZhYw'
        },
        {
          model:'Canon PIXMA E477',
          id:2,
          company:'Canon',
          description: "Canon PIXMA E477 All-in-One Wireless Ink Efficient Colour Printer (White/Blue)",
          price: 4999,
          pic:'https://www.reliancedigital.in/medias/Canon-PIXMAG3010-Printers-491419970-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MjAyfGltYWdlL2pwZWd8aW1hZ2VzL2g0Mi9oZDIvOTAxNTQ3MzQzODc1MC5qcGd8M2VjZjM0NDQ5NmNmYTg4YmYzNDEwODAxNGQ4ZWE5OTBjNDFjMjEyMjdiNjkwYjdmOTNjMDFjNWZhYTBlZmE2MA'
        },
        {
          model:'Canon PIXMA G3010',
          id:3,
          company:'canon',
          description: "Canon Pixma G3010 All-in-One Wireless Ink Tank Colour Printer (Black)",
          price: 14499,
          pic:'https://www.reliancedigital.in/medias/HP-Deskjet-Ink-Advantage-491897355-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2OTExMnxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaDJlLzEwMTAxOTY0NjAzNDIyLmpwZ3w5NzJmNjIxY2YyOGVkMWRiZmNmZDIwNDUzZDBlNjI5YzZjMDc1ZDY0MDUxZDMxYjhjMzYyNGJkMDcyY2Q1NGIy'
        },
        {
          model:'Canon PIXMA E3370',
          id:4,
          company:'Canon',
          description: "Canon PIXMA E3370 All-in-One Ink Efficient WiFi Printer (Black)",
          price: 6699,
          pic:'https://www.reliancedigital.in/medias/HP-Deskjet-2332-491897369-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTY5M3xpbWFnZS9qcGVnfGltYWdlcy9oZmIvaGY3LzEwMTAxOTc2MTM3NzU4LmpwZ3xhZThhNWE3OTI1YWZkY2Y1YTg0YWExN2VhODhiMzUyNjk4MDlkN2MxNDdjNGEwNWRmM2E3NDM4MWU1ZmMyYjUw'
        },
        {
          model:'Canon PIXMA E560',
          id:5,
          company:'Canon',
          description: "Canon PIXMA E560 Colour Wifi Multifunction Inkjet Printer (Black)",
          price: 8799,
          pic:'https://www.reliancedigital.in/medias/Canon-G2020-Printers-491947111-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzYxMnxpbWFnZS9qcGVnfGltYWdlcy9oZWUvaDVkLzk2MDkwNzEzMjkzMTAuanBnfGNhNGQ5NzdhMTk2MjZkMjVkYTI0YTk0ODU4Zjc0NjQyOWMwYThiZDAzNDhkODk0ZGQ3NTBlOWVkMmRmOGZmODU'
        },
        {
          model:'Canon PIXMA MG2577s',
          id:6,
          company:'Canon',
          description: "Canon Pixma MG2577s All-in-One Inkjet Colour Printer (Blue/White)",
          price: 1999,
          pic:'https://www.reliancedigital.in/medias/HP-SmartTank-493664592-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjAyM3xpbWFnZS9qcGVnfGltYWdlcy9oNDIvaDg0LzEwMTI2ODEyNDc5NTE4LmpwZ3w4NThkZDQxOTIyMzVkZjBmNmVhYzQ4ZTQ4NDlhNGNhZWFhZWQwMDM3NmRmYzE2OTZkZWYyZTExNTY0NDZjYzA3'
        },
   
        {
          model:'Canon PIXMA G1010',
          id:7,
          company:'Canon',
          description: "Canon Pixma G1010 Single Function Ink Tank Colour Printer (Black)",
          price: 6999,
          pic:'https://www.reliancedigital.in/medias/Canon-PIXMA-MG3070S-All-in-One-Inkjet-Printer-491282646-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4ODc3fGltYWdlL2pwZWd8aW1hZ2VzL2gyOS9oZTUvODkzMjk2NjAwNjgxNC5qcGd8OWJmODUxZTc3YTIyNmZlYjU0MDIyNTVlOWRkY2M5YmQxN2U0MjJjZjk3ZDlhOTQ2ZjQ1YjJlZmQxZjkyZmFhNw'
        },
        {
          model:'Canon PIXMA TS207',
          id:8,
          company:'Canon',
          description: "Canon PIXMA TS207 Single Function Inkjet Printer (Black)",
          price: 2299,
          pic:'https://www.reliancedigital.in/medias/Epson-L3255-Printer-492850306-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODkwNHxpbWFnZS9qcGVnfGltYWdlcy9oMDAvaDc2Lzk4MjkyNzA5NDU4MjIuanBnfDRmNmI4ZGMzMTI5NGZmNjk2NjVjNjMyNTgxZGM3ZTUyN2YyY2Y5NGQ0MDZiOWQzNDZlNDgzOTE0MWIwN2NhNGI'
        }
      ];


  return (
    <div className={sellingprinters.swiperconatier}>
    <div className={sellingprinters.BestDeals}>Bestselling Printers starting at Rs.39 <span className={sellingprinters.block}>...</span> <span>99 | No Cost EMI available</span>
      <Link to="/RelianceDigital/commonbestdeals/printers"><button>view all</button></Link>
      </div>
        <CommonCarocial data={data}/>
    </div>
  )
}
