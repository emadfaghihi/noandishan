export function HandelInputValue(e:any,setFormValue:(arg:any)=>void) {
    const name = e.target ? e.target.name : e.name;
    const value = e.target ? e.target.value : e.value;
    setFormValue((prev: any) => ({
      ...prev,
      [name]: value,
    }));
}