import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  DataGrid,
} from "@mui/x-data-grid";

// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';

// function Chips(cell:any):any { 
//     if(cell.value === false) return (
//     <Stack key={cell.id} direction="row" spacing={1}>
//         <Chip label="Non vérifier" color="error" variant="outlined" />
//     </Stack> )
    
//     if(cell.value === true) return( 
//     <Stack key={cell.id} direction="row" spacing={1}>
//         <Chip label="Vérifier" color="success" variant="outlined" />
//     </Stack> )
// }

export default function UserTable(props:any) {
    const { users, icon } = props;
    const columns = [
      { field: "id", headerName: "ID", editable: false },
      {
        field: "avatar",
        headerName: "Avatars",
        editable: false,
        sortable: false,
        width: 100,
      },
      {
        field: "firstname",
        headerName: "Prénom",
        editable: false,
        width: 150,
      },
      {
        field: "lastname",
        headerName: "Nom",
        editable: false,
        width: 150,
      },
      {
        field: "email",
        editable: false,
        width: 200,
      },
      // {
      //   field: "isverified",
      //   headerName: "Vérifié",
      //   renderCell: (cell:any) => {
      //     return Chips(cell)
      //   },
        // editable: false,
        // width: 200,
      // }
    ];
    // function test(e:any){
    //   console.log(e)
    // }

    return (
      <Box className="tabs-content">
        <Box style={{ display: "flex", height: "100%" }}>
          <Box style={{ flexGrow: 1 }}>
            <Typography
              variant="h4"
              color="primary"
              sx={{
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              {icon} Gestion des utilisateurs
            </Typography>
            <DataGrid
              rowHeight={38}
              rows={users}
              columns={columns}
              pagination
              loading={users.length === 0}
              checkboxSelection={false}
              disableSelectionOnClick={true}
              // onCellEditCommit={(e:any) => test(e)}
              key="userTableAdmin"
            />
          </Box>
        </Box>
      </Box>
    );
  }