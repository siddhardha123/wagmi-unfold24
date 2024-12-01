use anchor_lang::prelude::*;

declare_id!("GuT7vYw4ME83xaQfgNPUU7Z6xxmosQSx2GCWEbGiknsC");

#[program]
pub mod gold_token {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, name: String, symbol: String) -> Result<()> {
        let token_account = &mut ctx.accounts.token_account;
        token_account.authority = ctx.accounts.authority.key();
        token_account.name = name;
        token_account.symbol = symbol;
        token_account.total_supply = 0;
        Ok(())
    }

    pub fn mint(ctx: Context<Mint>, amount: u64) -> Result<()> {
        let token_account = &mut ctx.accounts.token_account;
        let user = &mut ctx.accounts.user;

        token_account.total_supply = token_account.total_supply.checked_add(amount).unwrap();
        user.balance = user.balance.checked_add(amount).unwrap();

        Ok(())
    }

    pub fn transfer(ctx: Context<Transfer>, amount: u64) -> Result<()> {
        let from = &mut ctx.accounts.from;
        let to = &mut ctx.accounts.to;

        if from.balance < amount {
            return Err(ErrorCode::InsufficientFunds.into());
        }

        from.balance = from.balance.checked_sub(amount).unwrap();
        to.balance = to.balance.checked_add(amount).unwrap();

        Ok(())
    }

    pub fn redeem(ctx: Context<Redeem>, amount: u64) -> Result<()> {
        let token_account = &mut ctx.accounts.token_account;
        let user = &mut ctx.accounts.user;

        if user.balance < amount {
            return Err(ErrorCode::InsufficientFunds.into());
        }

        token_account.total_supply = token_account.total_supply.checked_sub(amount).unwrap();
        user.balance = user.balance.checked_sub(amount).unwrap();

        // Here you would typically integrate with an external system to handle the physical gold redemption
        // For this example, we'll just emit an event
        emit!(RedeemEvent {
            user: *user.to_account_info().key,
            amount,
        });

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = authority, space = 8 + 32 + 32 + 32 + 8)]
    pub token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Mint<'info> {
    #[account(mut)]
    pub token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub user: Account<'info, User>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct Transfer<'info> {
    #[account(mut)]
    pub from: Account<'info, User>,
    #[account(mut)]
    pub to: Account<'info, User>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct Redeem<'info> {
    #[account(mut)]
    pub token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub user: Account<'info, User>,
    pub authority: Signer<'info>,
}

#[account]
pub struct TokenAccount {
    pub authority: Pubkey,
    pub name: String,
    pub symbol: String,
    pub total_supply: u64,
}

#[account]
pub struct User {
    pub balance: u64,
}

#[event]
pub struct RedeemEvent {
    pub user: Pubkey,
    pub amount: u64,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Insufficient funds for transaction.")]
    InsufficientFunds,
}